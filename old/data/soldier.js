/* HEAL(HERO), DMGINC(BOTH),
 * HEALED, ATKRATE, CRITRATE, DMGINC, DMGDEC,
 * OATKRATE, ODEFRATE, OMDEFRATE, ODMGDEC, OCRITRATE,
 * DATKRATE, DDEFRATE
 * */
var soldier = [{
    NAME: '驅魔師',
    HP: 40, ATK: 37, DEF: 22, MDEF: 23,
    ARMY: '僧侶', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = combat.defSoldier.ARMY;
        if(side == 'defense') oppArmy = combat.offSoldier.ARMY;
        if(oppArmy == '魔物') return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return [0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>和魔物戰鬥時，攻擊提升30%。和非魔物戰鬥時，防禦提升30%。'
},{
    NAME: '森林祭司',
    HP: 40, ATK: 31, DEF: 20, MDEF: 23,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    HEAL: 0.15,
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。英雄施加的治療效果提升15%。英雄對友軍釋放技能時，有100%幾率驅散1個弱化狀態。'
},{
    NAME: '狂熱者',
    HP: 36, ATK: 40, DEF: 20, MDEF: 20,
    ARMY: '僧侶', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense'){
            buffNUM = combat.offBUFFLIST.length;
            soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        }
        if(side == 'defense'){
            buffNUM = combat.defBUFFLIST.length;
            soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        }
        if(soldPerHP > 0.8) return [0.15*buffNUM, 0, 0.15*buffNUM, 0.15*buffNUM, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命高於80%時，身上每有一個強化狀態，則士兵攻擊、防禦、魔防提升15%。（最高提升45%）'
},{
    NAME: '巫女',
    HP: 36, ATK: 31, DEF: 17, MDEF: 28,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'], CHARONLY: true,
    MIDRATE: function(side){
        if(side == 'offense'){
            oppDMGTYPE = combat.defDMGTYPE;
            soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        }
        if(side == 'defense'){
            oppDMGTYPE  = combat.offDMGTYPE;
            soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        }
        if(oppDMGTYPE == '物理傷害' && soldPerHP == 1)
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.75];
        else return false;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。士兵生命100%時，英雄遭受物理傷害降低75%'
},{
    NAME: '神官',
    HP: 34, ATK: 31, DEF: 19, MDEF: 28,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    HEAL: 0.15,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0, 0, 0.3, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」，英雄施加的治療效果+15%。士兵生命>80%時，防禦提升30%。'
},{
    NAME: '神官騎士',
    HP: 36, ATK: 34, DEF: 22, MDEF: 26,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '騎行',
    HEAL: 0.15,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0, 0, 0.3, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」，英雄施加的治療效果提升15%。士兵生命>80時，防禦提升30%。'
},{
    NAME: '洗罪者',
    HP: 48, ATK: 34, DEF: 22, MDEF: 22,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];
        else return false;
    },
    DESC: '被攻擊進入戰鬥時遭受傷害降低20%自身沒有弱化效果時，部隊不會遭受致命一擊並恢復20%生命值，觸發後士兵最大生命降低20%(每場戰鬥最多觸發一次）。'
},{
    NAME: '地精騎士',
    HP: 36, ATK: 43, DEF: 20, MDEF: 20,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>士兵暴擊率提升30%，如果發生暴擊，戰鬥後偷取敵軍1個強化效果並施加1個強力弱化效果。'
},{
    NAME: '武士',
    HP: 40, ATK: 40, DEF: 22, MDEF: 22,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* combat neg */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        range = combat.range;
        if(range == 1) return [0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0.2, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>部隊攻擊不受近戰傷害減免。近戰攻擊時，攻擊提升20%，遠程攻擊時，暴擊率提升20%。'
},{
    NAME: '暗殺者',
    HP: 40, ATK: 40, DEF: 20, MDEF: 20,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0.15, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>暴擊率提升30%，攻擊提升15%。'
},{
    NAME: '緋霧女侍',
    HP: 40, ATK: 37, DEF: 22, MDEF: 26,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>暴擊率提升45%，暴擊後對敵軍施加1個強力弱化效果。'
},{
    NAME: '影侍',
    HP: 36, ATK: 43, DEF: 20, MDEF: 20,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* TRUE DMG */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>暴擊率提升30%，暴擊後對敵軍造成部隊生命上限20%的傷害。'
},{
    NAME: '無面者',
    HP: 36, ATK: 43, DEF: 20, MDEF: 22,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0.15, 0, 0, 0, 0, 0.15, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>士兵攻擊、暴擊率提升15%。進入戰鬥前，使敵軍部隊遭受暴擊率提升15%。'
},{
    NAME: '天空射手',
    HP: 36, ATK: 40, DEF: 17, MDEF: 23,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') combat.offMOVETYPE = '飛行';
        if(side == 'defense') combat.defMOVETYPE = '飛行';
        return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>使本部隊的移動不受地形的影響。主動進入戰鬥時，攻擊提升30%。'
},{
    NAME: '旋風遊騎兵',
    HP: 40, ATK: 37, DEF: 22, MDEF: 19,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.5) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    DESC: '全屬性+30%<br>生命大於50%時，被攻擊時進入戰鬥前有100%的概率觸發，遭受傷害降低50%。'
},{
    NAME: '突襲弩騎兵',
    HP: 36, ATK: 37, DEF: 20, MDEF: 20,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    DESC: '全屬性+30%<br>主動進入戰鬥前，75%概率使敵軍移動力降低2，防禦降低20%，持續1回合。'
},{
    NAME: '火弩狙擊手',
    HP: 34, ATK: 40, DEF: 19, MDEF: 23,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* TRUE DMG */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>主動進入戰鬥時，攻擊提升30%，戰後額外造成對方生命上限15%的傷害。'
},{
    NAME: '大精靈',
    HP: 34, ATK: 40, DEF: 19, MDEF: 23,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(terrainName == '樹林' || terrainName == '山地')
            return [0.3, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>在「樹林」和「山地」時，攻防提升30%。'
},{
    NAME: '矮人冒險者',
    HP: 34, ATK: 37, DEF: 17, MDEF: 20,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'], SOLDONLY: false,
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>英雄的技能選取形式全部變為直線型。部隊傷害提升15%。'
},{
    NAME: '暗精靈射手',
    HP: 31, ATK: 40, DEF: 17, MDEF: 26,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(oppPerHP == 1) return [0.45, 0, 0.45, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>攻擊100%生命值的部隊時，進入戰鬥後攻擊和防禦提升45%'
},{
    NAME: '投石車',
    HP: 31, ATK: 37, DEF: 17, MDEF: 20,
    ARMY: '弓兵', RANGE: 3, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return [0, 0, 0, 0, 0, 0, 0, -0.1, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>部隊普攻射程提升1。主動進入戰鬥時，部隊傷害降低10%，20%概率造成強力弱化效果。'
},{
    NAME: '樹人守衛',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    HEALED: 0.3,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP == 1) return [0.45, 0, 0.45, 0.45, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵遭受治療效果提升30%。士兵生命100%時，攻擊、防禦、魔防提升45%。 '
},{
    NAME: '近衛槍兵',
    HP: 43, ATK: 40, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP < 0.7) return [0.45, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命低於70%時，攻擊提升45%。'
},{
    NAME: '姬武神',
    HP: 40, ATK: 43, DEF: 22, MDEF: 20,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        else return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>主動進入戰鬥時，攻擊提升30%，75%概率使敵軍攻防降低20%，持續1回合。'
},{
    NAME: '暗影百夫長',
    HP: 48, ATK: 40, DEF: 26, MDEF: 16,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* TRUE DMG */
    DESC: '全屬性+30%<br>士兵生命高於10%時，被攻擊進入戰鬥時，戰後100%概率觸發英雄的[倒刺]傷害。'
},{
    NAME: '岩石巨人',
    HP: 48, ATK: 34, DEF: 28, MDEF: 18,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP < 0.7) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命低於70%時，遭受所有傷害降低30%。'
},{
    NAME: '重戟百夫長',
    HP: 48, ATK: 37, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        else return [0.3, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>被攻擊進入戰鬥時，攻擊和防禦提升30%'
},{
    NAME: '熔岩巨人',
    HP: 53, ATK: 34, DEF: 26, MDEF: 19,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    DESC: '全屬性+30%<br>行動結束時，對2格內1個敵軍施加[灼燒]:行動結束損失30%的生命。'
},{
    NAME: '水晶塑型者',
    HP: 48, ATK: 34, DEF: 22, MDEF: 22,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* DMG REFLECT */
    /* HEAL AFTER BATTLE */
    DESC: '全屬性+30%<br>行動結束時，恢復土兵30%的生命，被魔法攻擊進入戰鬥時，部隊反彈受到傷害的30%。'
},{
    NAME: '重裝槍兵',
    HP: 48, ATK: 37, DEF: 26, MDEF: 16,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '物理傷害')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '全屬性+30%<br>遭受物理傷害降低30%。'
},{
    NAME: '重裝步兵',
    HP: 43, ATK: 40, DEF: 23, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return [0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>主動進入戰鬥時，士兵攻擊提升30%。被攻擊進入戰鬥時，士兵防禦提升30%。'
},{
    NAME: '方陣列兵',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE','MIDRATE'],
    RATE: function(side){
        return [0.20, 0, 0.20, 0, 0];
    },
    MIDRATE: function(side){
        if(side == 'defense') return false;
        else{
            combat.offSoldCounterRate = 1;
            return [0, 0, 0, 0, 0, 0.20, 0, 0, 0, 0, 0];
        }
    },
    DESC: '全屬性+30%<br>士兵攻擊、防禦提升20%。<br>主動攻擊時，士兵造成的傷害增加20%且無視職業克制。 '
},{
    NAME: '狂戰士',
    HP: 40, ATK: 43, DEF: 22, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE','MIDRATE'],
    RATE: function(side){
        return [0.15, 0, 0, 0, 0];
    },
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>暴擊率提升30%，攻擊提升15%。'
},{
    NAME: '近衛步兵',
    HP: 53, ATK: 37, DEF: 23, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0, 0, 0.45, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命高於80%時，防禦提升45%。'
},{
    NAME: '假面女僕',
    HP: 36, ATK: 40, DEF: 23, MDEF: 23,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* TRUE DMG */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0.45, 0, 0.45, 0.45, 0];
    },
    DESC: '全屬性+30%<br>進入戰鬥前，損失部隊當前生命的5%，使得士兵攻擊、防禦、魔防提升45%'
},{
    NAME: '高地勇士',
    HP: 43, ATK: 40, DEF: 22, MDEF: 20,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE', 'MIDRATE'],
    RATE: function(side){
        return [0.15, 0, 0, 0, 0];
    },
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15];
    },
    DESC: '全屬性+30%<br>攻擊提升15%，遭受所有傷害降低15%。'
},{
    NAME: '素體改造人',
    HP: 40, ATK: 43, DEF: 22, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>主動攻擊時，可以隨英雄遠程攻擊一起戰鬥，並且土兵造成傷害提升30%。'
},{
    NAME: '王女親衛',
    HP: 43, ATK: 40, DEF: 22, MDEF: 23,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        range = combat.range;
        if(range == 1) return false;
        oppDMGTYPE = combat.offDMGTYPE;
        ATK=0, DMGDEC=10;
        midrate = [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(oppDMGTYPE == '魔法傷害') midrate[DMGDEC] += 0.3;
        return midrate;
    },
    DESC: '全屬性+30%<br>被攻擊時，士兵射程+1，攻擊提升30%，遭受魔法傷害降低30%。'
},{
    NAME: '食人巨魔',
    HP: 48, ATK: 43, DEF: 20, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(oppPerHP < perHP) return [0.3, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>攻擊生命值低於本部隊的敵軍時，進入戰鬥後攻擊與防禦各提升30%。'
},{
    NAME: '暗黑衛隊',
    HP: 53, ATK: 37, DEF: 23, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* TRUE DMG */
    /* HEAL AFTER BATTLE */
    DESC: '全屬性+30%<br>主動進入戰鬥時，戰後造成對方部隊生命上限15%傷害，本部隊生命值恢復30%。'
},{
    NAME: '狂獸人',
    HP: 43, ATK: 40, DEF: 22, MDEF: 17,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0.45, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命高於80%時攻擊提升45%。'
},{
    NAME: '蠻族勇士',
    HP: 48, ATK: 43, DEF: 20, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        else return false;
        if(oppPerHP <= perHP) return [0.45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else if(oppPerHP > perHP) return [0.3, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>攻擊生命值百分比低於或等於本部隊的敵軍時，士兵攻擊提升45%<br>攻擊生命值百分比高於本部隊的敵軍時，士兵攻擊、防禦提升30% '
},{
    NAME: '海怪',
    HP: 43, ATK: 40, DEF: 23, MDEF: 19,
    ARMY: '水兵', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '水行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        terrainName = combat.offTerrain;
        oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(terrainName == '水' && oppPerHP > 0.5)
            return [0.45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>在水中時，攻擊50%生命值以上的部隊時，進入戰鬥後攻擊提升45%。'
},{
    NAME: '人魚統領',
    HP: 43, ATK: 40, DEF: 23, MDEF: 19,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '水行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(terrainName == '水') return [0.3, 0, 0.3, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>在水中時，攻擊與防禦提升30%。'
},{
    NAME: '龍蝦巨獸',
    HP: 43, ATK: 37, DEF: 26, MDEF: 16,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '水行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(terrainName == '水')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    DESC: '全屬性+30%<br>在水中時，遭受所有傷害降低50%'
},{
    NAME: '潮汐精靈',
    HP: 43, ATK: 37, DEF: 23, MDEF: 22,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '魔法傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain, oppDMGTYPE = combat.defDMGTYPE;
        if(side == 'defense') terrainName = combat.defTerrain, oppDMGTYPE = combat.offDMGTYPE;
        ATK=0, DMGDEC=10;
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(terrainName == '水') midrate[ATK] += 0.2;
        if(oppDMGTYPE == '物理傷害') midrate[DMGDEC] += 0.45;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。在水中時，士兵遭受物理傷害降低45%，攻擊提升20%。'
},{
    NAME: '蜥蜴刀客',
    HP: 40, ATK: 43, DEF: 23, MDEF: 19,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '水行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(terrainName == '水') return [0.45, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>在水中時，攻擊提升45%。'
},{
    NAME: '深洋海盜',
    HP: 43, ATK: 40, DEF: 22, MDEF: 22,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '水行',
    SKILLTYPE: ['RATE','MIDRATE'],
    RATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(terrainName == '水') return [0.20, 0, 0, 0, 0];
        else return false;
    },
    MIDRATE: function(side){
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(terrainName == '水') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30];
        else return false;
    },
    DESC: '全屬性+30%<br>在水中時，部隊攻擊不受近戰傷害減免，士兵遭受所有傷害降低30%，攻擊提升20%。<br>主動對處於「水中」的敵軍造成傷害後，偷取1個強化效果。 '
},{
    NAME: '魔女',
    HP: 34, ATK: 40, DEF: 17, MDEF: 28,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP == 1) return [0.45, 0, 0, 0.45, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。士兵生命100%時，攻擊、魔防提升45%'
},{
    NAME: '魔晶術士',
    HP: 43, ATK: 37, DEF: 22, MDEF: 19,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    /* DMG REFLECT */
    /* HEAL AFTER BATTLE */
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。行動結束時，恢復士兵30%的生命。被物理攻擊進入戰鬥時，部隊反彈受到傷害的30%。'
},{
    NAME: '男巫',
    HP: 34, ATK: 37, DEF: 19, MDEF: 23,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        return [0.3, 0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。主動攻擊時，攻擊、魔防提升30%。'
},{
    NAME: '禁忌煉金師',
    HP: 40, ATK: 40, DEF: 20, MDEF: 19,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0.30, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。<br>行動結束時，恢復士兵30%的生命。 士兵生命高於80%時，士兵射程+1，攻擊提升30%。'
},{
    NAME: '皇家獅鷲',
    HP: 40, ATK: 45, DEF: 20, MDEF: 23,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0.3, 0, 0.3, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命大於80%時，攻擊與防禦提升30%。'
},{
    NAME: '吸血蝙蝠',
    HP: 43, ATK: 45, DEF: 22, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    /* HEAL AFTER BATTLE */
    DESC: '全屬性+30%<br>主動進入戰鬥時，戰後士兵可以恢復造成傷害45%的生命。'
},{
    NAME: '鋼翼勇士',
    HP: 43, ATK: 45, DEF: 22, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else if(side == 'defense' && combat.range > 1)
            return [0, 0, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>主動攻擊時，士兵攻擊提升30%。被遠程攻擊時，士兵防禦、魔防提升30%。'
},{
    NAME: '天使',
    HP: 43, ATK: 43, DEF: 22, MDEF: 26,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['RATE','MIDRATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.5) return [0.2, 0, 0.2, 0, 0];
        else return false;
    },
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defMDGTYPE;
        if(side == 'defense') oppDMGTYPE = combat.offMDGTYPE;
        if(oppDMGTYPE == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45];
        else return false;
    },
    DESC: '全屬性+30%<br>遭受魔法傷害降低45%。士兵生命大於50%時，攻防提升20%。'
},{
    NAME: '石像鬼',
    HP: 43, ATK: 45, DEF: 22, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.5) return [0.3, 0, 0, 0, 0];
        else if(soldPerHP < 0.5) return [0, 0, 0.3, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命大於50%時，攻擊提升30%，士兵生命小於50%時，防禦提升30%。'
},{
    NAME: '聖天馬',
    HP: 40, ATK: 43, DEF: 23, MDEF: 23,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.5) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命大於50%時，主動攻擊進入戰鬥前，100%的概率遭受傷害降50%。'
},{
    NAME: '龍裔戰士',
    HP: 43, ATK: 43, DEF: 23, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '飛行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        if(run == 0) return false;
        else if(run >= 5) return [0.30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30];
        else return [0.06*run, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.06*run];
    },
    DESC: '全屬性+30%<br>攻擊前每移動一格，士兵攻擊提升6%（上限30%），遭受傷害降低6%（上限30%）。<br>被攻擊受到傷害後，部隊移動力+2，持續1回合。 '
},{
    NAME: '地獄犬',
    HP: 40, ATK: 45, DEF: 20, MDEF: 19,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    DESC: '全屬性+30%<br>主動進入戰鬥時，戰後使得周圍2格範圍內的所有敵軍遭受傷害提升20%。'
},{
    NAME: '骨犀',
    HP: 36, ATK: 45, DEF: 20, MDEF: 19,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(soldPerHP > 0.8) return [0.45, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命高於80%時，攻擊提升45%。'
},{
    NAME: '重裝騎兵',
    HP: 40, ATK: 43, DEF: 22, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [0.2, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>攻擊提升20%。'
},{
    NAME: '皇家騎兵',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
            oppDMGTYPE = combat.defDMGTYPE;
        }
        if(side == 'defense'){
            soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
            oppDMGTYPE = combat.offDMGTYPE;
        }
        if(soldPerHP > 0.8 && oppDMGTYPE == '物理傷害')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45];
        else return false;
    },
    DESC: '全屬性+30%<br>士兵生命高於80%時，遭受物理傷害降低45%。'
},{
    NAME: '龍騎兵',
    HP: 43, ATK: 43, DEF: 22, MDEF: 19,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return [0.3, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>主動進入戰鬥時，攻擊與防禦提升30%。'
},{
    NAME: '近衛騎兵',
    HP: 43, ATK: 40, DEF: 23, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45];
        else return false;
    },
    DESC: '全屬性+30%<br>主動進入戰鬥時，遭受的所有傷害降低45%。'
},{
    NAME: '獨角獸',
    HP: 43, ATK: 43, DEF: 22, MDEF: 22,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '魔法傷害', MOVETYPE: '野戰',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            terrainName = combat.offTerrain;
            combat.offMOVETYPE = '野戰';
        }
        if(side == 'defense'){
            terrainName = combat.defTerrain;
            combat.defMOVETYPE = '野戰';
        }
        if(terrainName == '樹林' || terrainName == '山地' || terrainName == '草地')
            return [0.3, 0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>普通攻擊造成「魔法傷害」。部隊移動不受地形影響，在「樹林」、「山地」和「草地」戰鬥時攻擊、魔防提升30%。'
},{
    NAME: '天琴親衛',
    HP: 36, ATK: 43, DEF: 22, MDEF: 22,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        if(run == 0) return false;
        else if(run >= 3) return [0.45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return [0.15*run, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '全屬性+30%<br>攻擊前每移動一格，士兵攻擊提升15%。(上限45%) '
},{
    NAME: '聖殿騎士',
    HP: 40, ATK: 40, DEF: 22, MDEF: 26,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['RATE', 'MIDRATE'],
    RATE: function(side){
        return [0, 0, 0, 0.45, 0];
    },
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = getSoldArmy('defense');
        if(side == 'defense') oppArmy = getSoldArmy('offense');
        if(oppArmy == '魔物') return [0.45, 0, 0.45, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+30%<br>和[魔物]戰鬥時攻防提升45%。魔防提升45%。'
},{
    NAME: '魔蠍',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        ATK=0, CRITRATE=5, DMGDEC=10;
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(side == 'offense') terrainName = combat.offTerrain;
        if(side == 'defense') terrainName = combat.defTerrain;
        if(side == 'offense') midrate[ATK] += 0.15, midrate[CRITRATE] += 0.3;
        if(terrainName == '沙漠' || terrainName == '沙丘' || terrainName == '洞穴')
            midrate[DMGDEC] += 0.3;
        return midrate;
    },
},{
    NAME: '機械騎士',
    HP: 43, ATK: 43, DEF: 22, MDEF: 20,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else if(side == 'defense')
            return [0, 0, 0.15, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '主動攻擊時，士兵攻擊提升30%，被攻擊時，士兵防禦提升15%。生命值大於等於80%時通過防禦地形時，部隊可以獲得2格免除移動力降低的機會。'
},{
    NAME: '重裝骷髏',
    HP: 43, ATK: 40, DEF: 22, MDEF: 19,
    ARMY: '魔物', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* HEAL AFTER BATTLE */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        oppArmy = getSoldArmy('offense');
        if(oppArmy != '魔物' && oppArmy != '僧侶')
            return [0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+40%<br>亡者蘇生：士兵生命為0%時，主動進入戰鬥時，戰後恢復45%的生命；被攻擊進入戰鬥時，防禦提升30%。(除魔物和僧侶以外) '
},{
    NAME: '火焰骷髏弓手',
    HP: 34, ATK: 40, DEF: 20, MDEF: 19,
    ARMY: '魔物', RANGE: 2, DMGTYPE: '物理傷害', MOVETYPE: '步行',
    /* HEAL AFTER BATTLE */
    /* TRUE DMG */
    DESC: '全屬性+40%<br>亡者蘇生:士兵生命為0%時，主動進入戰鬥時，戰後恢復45%的生命；戰鬥後，額外造成對方部隊生命上限15%的傷害。'
},{
    NAME: '死靈騎士',
    HP: 40, ATK: 40, DEF: 22, MDEF: 20,
    ARMY: '魔物', RANGE: 1, DMGTYPE: '物理傷害', MOVETYPE: '騎行',
    /* HEAL AFTER BATTLE */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        oppArmy = getSoldArmy('offense');
        if(oppArmy != '魔物' && oppArmy != '僧侶')
            return [0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '全屬性+40%<br>亡者蘇生：士兵生命為0%時，主動進入戰鬥時，戰後恢復15%的生命；攻擊魔物和僧侶之外的部隊時        ，攻擊提升30%。'
},{
    NAME: '蛛魔精靈',
    HP: 43, ATK: 37, DEF: 22, MDEF: 22,
    ARMY: '魔物', RANGE: 1, DMGTYPE: '魔法傷害', MOVETYPE: '步行',
    DESC: '全屬性+40%<br>普通攻擊造成「魔法傷害」。主動攻擊前75%概率使敵方部隊移動力-2，魔防-20%，持續1回合。'
}];
