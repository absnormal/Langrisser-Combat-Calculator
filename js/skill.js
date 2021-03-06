function setChoosenSkills(side)
{
    if(page[side].selectedCharacter.choosenSkills == undefined)
        page[side].choosenSkills = page[side].charSkills.slice(0, 3);
    else
        page[side].choosenSkills = page[side].selectedCharacter.choosenSkills;
}

function displaySkills(side, skillList, pos = "", placement = "top", equip = "")
{
    page[side][skillList].forEach(function(skill, index){
        // skill img
        let img = document.getElementById(side+"-skill"+pos+"-"+index);
        if(skill == undefined) img.removeAttribute("src");
        else img.setAttribute("src", imgLocal+"skill/skill_"+LANG+"/"+skill.name+png);
        // cost img
        let cost = document.getElementById(side+"-skill"+pos+"-"+index+"-cost");
        if(skill == undefined) cost.removeAttribute("src");
        else cost.setAttribute("src", imgLocal+"icon/"+skill.cost+" Cost"+png);
        // skill popover
        $('.btn.'+side+"-skill"+pos+"-"+index).popover({
            trigger: "focus",
            container: "."+side+"-talent-skill-bar",
            placement: placement,
            html: true
        });
        if(skill == undefined) return;
        let content =  '<div class="col text-dark text-center p-1">\
                            <button id="'+side+'-'+skillList+'-'+index+'"\
                                onclick="'+equip+'Skill(this)"\
                                class="btn btn-primary">'+equip+'\
                            </button>\
                        </div>';
        let title ="<div class='row'>\
                        <div class='col'>\
                            <h5>"+skill.name+"</h5>\
                        </div>\
                    </div>\
                    <hr style='border-botton:1px;margin-top:1px;'>\
                    <div class='row'>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>Type:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.type+"</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>CD:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.CD+"</p>\
                                </div>\
                            </div>\
                        </div>\
                     </div>\
                     <div class='row'>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>Range:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.range+"</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>Span:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.span+"</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <hr style='border-botton:1px;margin-top:1px;'>\
                    <div class='row'>\
                        <div class='col popoverbody'>\
                            <p>"+skill.description+"</p>\
                        </div>\
                    </div>";
        $('.btn.'+side+"-skill"+pos+"-"+index).attr('data-original-title', title);

        if(equip != "")
            $('.btn.'+side+"-skill"+pos+"-"+index).attr('data-content', content);
    });
}

function setSkills(side)
{
    page[side].charSkills = [];
    // add exist skills
    page[side].selectedCharacter.skill.forEach(function(skill){
        let tmpskill = data.skill.find(x => x.name === skill);
        page[side].charSkills.push(tmpskill);
    });
    // fill skills with empty until 12
    for(let index=page[side].charSkills.length; index<12; index++)
        page[side].charSkills.push(undefined);

    setChoosenSkills(side);
    displaySkills(side, "choosenSkills");
}

function setSkillList(side)
{
    displaySkills(side, "choosenSkills", "ListChoosen", "right", "unequip");
    displaySkills(side, "charSkills", "List", "top", "equip");
}

function removeSkills(side, skillList, pos = "")
{
    page[side][skillList].forEach(function(skill, index){
        // skill img
        document.getElementById(side+"-skill"+pos+"-"+index).removeAttribute("src");
        // cost img
        document.getElementById(side+"-skill"+pos+"-"+index+"-cost").removeAttribute("src");
        // skill popover
        $('.btn.'+side+"-skill"+pos+"-"+index).popover('hide');
        $('.btn.'+side+"-skill"+pos+"-"+index).popover('disable');
        $('.btn.'+side+"-skill"+pos+"-"+index).popover('enable');
    });
}

function unequipSkill(ele)
{
    let side = ele.id.split("-")[0];
    let index = ele.id.split("-")[2];
    removeSkills(side, "choosenSkills", "ListChoosen");
    removeSkills(side, "choosenSkills");
    page[side].choosenSkills.splice(index, 1);
    displaySkills(side, "choosenSkills", "ListChoosen", "right", "unequip");
    displaySkills(side, "choosenSkills");
}

function equipSkill(ele)
{
    let side = ele.id.split("-")[0];
    let index = ele.id.split("-")[2];
    let skill = page[side].charSkills[index];

    if(page[side].choosenSkills.length == 3 || page[side].choosenSkills.includes(skill))
        return;

    page[side].choosenSkills.push(skill);
    displaySkills(side, "choosenSkills", "ListChoosen", "right", "unequip");
    displaySkills(side, "choosenSkills");
}
