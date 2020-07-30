/* 重甲 輕甲 布甲 */
var armor = [{
    NAME: '攻擊、智力+15%', TYPE: '一般',
    HP: 0, ATK: 0.15, INT: 0.15, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、智力+15%'
},{
    NAME: '攻擊、智力+20%', TYPE: '一般',
    HP: 0, ATK: 0.2, INT: 0.2, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、智力+20%'
},{
    NAME: '攻擊、智力+30%', TYPE: '一般',
    HP: 0, ATK: 0.3, INT: 0.3, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、智力+30%'
},{
    NAME: '防禦+10%(情報分析)', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '防禦+10%(情報分析)'
},{
    NAME: '魔防+10%(情報分析)', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0.1, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '魔防+10%(情報分析)'
},{
    NAME: '防禦+15%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0.15, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '防禦+15%'
},{
    NAME: '防禦+20%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0.2, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '防禦+20%'
},{
    NAME: '防禦+30%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0.3, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '防禦+30%'
},{
    NAME: '魔防20%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0.2, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '魔防20%'
},{
    NAME: '魔防30%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0.3, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '魔防30%'
},{
    NAME: '造成傷害提升10%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGINC: 0.1,
    DESC: '造成傷害提升10%'
},{
    NAME: '造成傷害提升15%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGINC: 0.15,
    DESC: '造成傷害提升15%'
},{
    NAME: '造成傷害提升20%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGINC: 0.2,
    DESC: '造成傷害提升20%'
},{
    NAME: '造成傷害提升30%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGINC: 0.3,
    DESC: '造成傷害提升30%'
},{
    NAME: '受到傷害降低10%', TYPE: '一般',
    DMGDEC: 0.1,
    DESC: '受到傷害降低10%'
},{
    NAME: '受到傷害降低15%', TYPE: '一般',
    DMGDEC: 0.15,
    DESC: '受到傷害降低15%'
},{
    NAME: '受到傷害降低20%', TYPE: '一般',
    DMGDEC: 0.2,
    DESC: '受到傷害降低20%'
},{
    NAME: '移動力+1', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1,
    DESC: '移動力+1'
},{
    NAME: '移動力+2', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 2,
    DESC: '移動力+1'
},{
    NAME: '移動力+3', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 3,
    DESC: '移動力+3'
},{
    NAME: '回合結束恢復20%生命', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '回合結束恢復20%生命'
},{
    NAME: '回合結束恢復50%生命', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '回合結束恢復50%生命'
},{
    NAME: '技巧+20%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0.2, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '技巧+20%'
},{
    NAME: '攻擊、智力+12.66%', TYPE: '一般',
    HP: 0, ATK: 0.1266, INT: 0.1266, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、智力+12.66%'
},{
    NAME: '防禦+12.66%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1266, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '防禦+12.66%'
},{
    NAME: '魔防+12.66%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0.1266, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '魔防+12.66%'
},{
    NAME: '技巧+12.66%', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0.1266, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '技巧+12.66%'
},{
    NAME: '再生', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '再生'
},{
    NAME: '憐憫之心', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    HEALED: 0.3,
    DESC: '接受治療效果+30%'
},{
    NAME: '死守', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '戰前恢復維拉智力5倍的生命'
},{
    NAME: '愛麗絲大爆發', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '不會受到地形導致的移動力下降影響'
},{
    NAME: '女王鞭撻', TYPE: '一般',
    HP: 0, ATK: 0.1, INT: 0.1, DEF: 0, MDEF: 0, DEX: 0.1, CRITRATEINC: 0.1,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGRATE: 0.1,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    CRITDMGINC:0.1, TRUEDMGINC: 0.1,
    DESC: '造成所有傷害、固定傷害、暴擊、暴擊傷害、智力、攻擊、技巧提升10%'
},{
    NAME: '進擊的加護(增傷)', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0.3, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動攻擊進入戰鬥時造成傷害提升30%'
},{
    NAME: '進擊的加護(減傷)', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0.5,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動攻擊進入戰鬥時遭受傷害降低50%'
},{
    NAME: '夢幻之吻', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '行動結束時恢復愛麗絲智力3倍的生命'
},{
    NAME: '免疫"攻擊、智力降低"、"無法使用主動技能"', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫"攻擊、智力降低"、"無法使用主動技能"'
},{
    NAME: '免疫"暈眩"、"無法遭受強化效果"、"移動力降低"', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫"暈眩"、"無法遭受強化效果"、"移動力降低"'
},{
    NAME: '免疫"固定傷害"', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫"固定傷害"'
},{
    NAME: '免疫"防禦、魔防降低"、"無法遭受治療"', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫"防禦、魔防降低"、"無法遭受治療"'
},{
    NAME: '免疫"被動技能失效"、"無法遭受強化效果"', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫"被動技能失效"、"無法遭受強化效果"'
},{
    NAME: '免疫“治療反轉（施加的治療轉化為傷害）”、“無法再行動”', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫“治療反轉（施加的治療轉化為傷害）”、“無法再行動”'
},{
    NAME: '免疫：“移動力降低”、“傷口詛咒（遭受治療轉化為傷害）”', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫：“移動力降低”、“傷口詛咒（遭受治療轉化為傷害）”'
},{
    NAME: '免疫', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '免疫所有弱化效果'
},{
    NAME: '氣浪', TYPE: '利昂 蘭芳特 羅莎莉婭 海倫娜',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動進入戰鬥時，如果部隊生命值大於80%，戰鬥中遭受傷害降低30%。'
},{
    NAME: '增援', TYPE: '利昂 蘭芳特 羅莎莉婭 海倫娜',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '行動結束時，恢復自身部隊20%生命。'
},{
    NAME: '馭水', TYPE: '維拉玖 安潔麗娜 利斯塔 皮耶魯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '移動時所有可以通過的地形都視為“水中”'
},{
    NAME: '冷血', TYPE: '銀狼 歐米伽 洛加',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0.15,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    CRITDMGINC: 0.15,
    DESC: '部隊暴擊率和暴擊傷害提升15%'
},{
    NAME: '迅步', TYPE: '燕 比蘿蒂絲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0.3, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '部隊“技巧”提升30%'
},{
    NAME: '護衛', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '替相鄰2格友軍承受物理攻擊'
},{
    NAME: '替相鄰2格友軍承受物理攻擊', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '替相鄰2格友軍承受物理攻擊'
},{
    NAME: '槍陣', TYPE: '芙蕾雅 蘭迪烏斯 雷丁 格尼爾 斯科特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '近戰戰鬥結束後，必定觸發[倒刺]的[固定傷害]'
},{
    NAME: '力突', TYPE: '阿倫 巴爾加斯 賽蕾娜 格尼爾',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '用“防禦”的1.6倍代替“攻擊”'
},{
    NAME: '遭受暴擊率降低20%', TYPE: '雷丁 阿倫 賽蕾娜 巴爾加斯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, CRITDEC: 0.2,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '遭受暴擊率降低20%'
},{
    NAME: '愛的聲援', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1,
    DESC: '移動力+1'
},{
    NAME: '攻擊、防禦增加15%', TYPE: '路因',
    HP: 0, ATK: 0.15, INT: 0, DEF: 0.15, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、防禦增加15%，可疊加'
},{
    NAME: '累積的知識', TYPE: '海恩',
    HP: 0, ATK: 0, INT: 0.06, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '智力提升6%，最高累積5個'
},{
    NAME: '女將軍的鐵腕', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動攻擊進入戰鬥時，英雄傷害提升20%，戰後損失10%生命。'
},{
    NAME: '魔性之血', TYPE: '索尼婭',
    HP: 0, ATK: 0.2, INT: 0.2, DEF: 0.2, MDEF: 0.2, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、智力、防禦、魔防提升20%，最高累積2層'
},{
    NAME: '海灘派對', TYPE: '阿爾弗雷德',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '自身為中心的3格範圍內所有「水兵」英雄移動時所有可以通過的地形都視為“水中”'
},{
    NAME: '猛進', TYPE: '帕恩',
    HP: 0, ATK: 0.03, INT: 0, DEF: 0, MDEF: 0, DEX: 0.03, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1, 
    DESC: '攻擊、技巧+3%，移動力+1，最高累積3層'
},{
    NAME: '強大的助力', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '範圍技能傷害提升20%'
},{
    NAME: '替相鄰2格友軍承受魔法攻擊', TYPE: '芙蕾雅 妮絲蒂爾 古巨拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '替相鄰2格友軍承受魔法攻擊'
},{
    NAME: '鐵薔薇(固傷)', TYPE: '芙蕾雅',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '戰鬥結束後，對敵方造成一次英雄魔防2.5倍的[固定傷害]'
},{
    NAME: '鐵薔薇(魔法減傷)', TYPE: '芙蕾雅',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '部隊遭受魔法傷害降低20%，用“魔防”的0.8倍代替“防禦'
},{
    NAME: '攻擊、智力+25%', TYPE: '弗拉基亞',
    HP: 0, ATK: 0.25, INT: 0.25, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、智力+25%'
},{
    NAME: '布偶娃娃', TYPE: '愛麗絲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '行動結束時，恢復自身周圍2格範圍內所有友軍部隊生命，恢復量為愛麗絲智力的2倍'
},{
    NAME: '健康', TYPE: '桑原和真',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '用“攻擊”的0.6倍代替“防禦”'
},{
    NAME: '復仇龍印', TYPE: '蕾娜塔',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 2, 
    DESC: '移動力+2'
},{
    NAME: '流浪的公主', TYPE: '克拉蕾特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '移動力加成(1~5)'
},{
    NAME: '無雙的霸主', TYPE: '亞魯特繆拉',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊提升10%，遭受物理傷害降低5%，最高可以累積4層。'
},{
    NAME: '御風', TYPE: '露娜 亞魯特繆拉 雪莉 安潔麗娜 亞修拉姆',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '生命大於50%進入戰鬥時，遭受傷害降低15%。'
},{
//沒人有藏馬，資料不明
    NAME: '妖狐', TYPE: '藏馬',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '自身所處地形視為“草地”；無視近戰傷害減免；主動攻擊時，無視敵方20%魔防'
},{
    NAME: '風華圓舞陣', TYPE: '藏馬',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '若敵軍行動結束時，位於藏馬周圍4格內，會受到其智力2倍的[固定傷害]'
},{
    NAME: '華嚴薔薇陣', TYPE: '藏馬',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '位於藏馬周圍4格範圍內，若敵軍擁有[魔界種子]效果時，造成傷害前會受到其智力2倍的[固定傷害]'
},{
    NAME: '黑龍波', TYPE: '飛影',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1, CRITDMGINC: 0.2,
    DESC: '移動力+1，暴擊傷害提升20%，攻擊後可以再次行動（再行動效果每回合只能觸發1次）'
},{
    NAME: '大陸榮光', TYPE: '雪露法妮爾',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '技能射程+1，範圍+1'
},{
    NAME: '女神的代行者', TYPE: '女神化身',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 2,
    DESC: '移動力+ 2'
},{
    NAME: '代行神力', TYPE: '女神化身',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: -3,
    DESC: '移動力-3，使用技能時部隊射程+3，行動結束時，恢復自身1.5倍智力的生命，並驅散1個弱化狀態'
},{
    NAME: '超凡具現', TYPE: '超凡領域',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '遠程傷害提升12%；在行動結束時，如果未造成過傷害，驅散自身1個弱化效果。'
},{
    NAME: '終焉葬歌', TYPE: '超凡領域',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '在一回合內主動擊殺敵軍後，自身所有技能冷卻時間減少1回合；自身死亡時，令所有友軍技能冷卻時間減少1回合。'
},{
    NAME: '戰場大師', TYPE: '戰略大師',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '移動時所有可通過地形都視為“平地”。所在地形如果有防禦提升效果，則戰鬥中造成傷害提升15%。'
},{
    NAME: '天煌聖女', TYPE: '公主聯盟 海恩',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '使用技能時，傷害提升12%'
},{
    NAME: '聖樹庇護', TYPE: '拉姆達',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '周圍2格以內的所有友軍部隊受到聖樹庇護的效果，持續2回合。'
},{
    NAME: '暗之輪舞', TYPE: '黑暗輪迴',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '戰鬥中，如果敵軍身上有3個以上的弱化效果，本部隊造成傷害提升15%。'
},{
    NAME: '魔法新衣', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '如果部隊生命值低於80%時，遭受的下一次傷害降低50%'
},{
    NAME: '奕能法衣', TYPE: '諾埃米',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0.2, ODMGDEC: 0.2,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '自身部隊之後的2次主動攻擊進入戰鬥時，“遭受傷害降低20%，造成傷害提升20% ”。且在狀態持續期間“部隊射程+ 2，在行動結束時，恢復自身1.5倍智力的生命值，並驅散1個弱化狀態”'
},{
    NAME: '團結的意志', TYPE: '蘭迪烏斯',
    HP: 0, ATK: 0.2, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊提升20%，並將攻擊的15%增加到防禦和魔防上'
},{
    NAME: '璀璨的傳說', TYPE: '傳說彼端',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '與不發生剋制關係的部隊交戰時，傷害額外提升15%'
},{
    NAME: '替相鄰2格友軍承受所有攻擊', TYPE: '蘭迪烏斯 雷丁 神崎堇 艾米莉亞',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '替相鄰2格友軍承受所有攻擊'
},{
    NAME: '止水', TYPE: '蘭迪烏斯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, CRITDEC: 0.3,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '周圍2格以內的所有友軍部隊遭受暴擊率降低30%，遭受遠程傷害降低15%。'
},{
    NAME: '明鏡止水', TYPE: '蘭迪烏斯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, CRITDEC: 0.3,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '周圍3格以內的所有友軍部隊遭受暴擊率降低30%，遭受遠程傷害降低15%，遭受治療效果提升15%；周圍2格以內的所有敵軍部隊無法觸發“再移動”效果。'
},{
    NAME: '信仰', TYPE: '羅莎莉婭',
    DMGINC: 0.05, DMGDEC: 0.05, 
    DESC: '造成傷害提升5%，遭受傷害降低5%，可以累積，最多可以累積3個。'
},{
/*沒布琳達，不知道是否屬於強化效果   
  謎騎不屬於強化*/
/*    NAME: '風華典範', TYPE: '布琳達',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '累積3次後，在行動結束時，可以額外行動一次。'*/
},{
    NAME: '魔武', TYPE: '克蘿賽 傑利奧魯&蕾拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '英雄造成的魔法傷害，全部視為物理傷害，並將“攻擊”的10%增加到“智力”上'
},{
    NAME: '增幅', TYPE: '傑利奧魯&蕾拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '英雄造成的物理傷害，全部視為魔法傷害，並將“智力”的10%增加到“攻擊”上'
},{
    NAME: '高階增幅', TYPE: '傑利奧魯&蕾拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '英雄所有的傷害全部變為物理傷害，並將“智力”的50%增加到“攻擊”上'
},{
    NAME: '高階魔武', TYPE: '傑利奧魯&蕾拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '英雄所有的傷害全部變為魔法傷害，並將“攻擊”的50%增加到“智力”上'
},{
    NAME: '暗之領域', TYPE: '亞修拉姆',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '周圍3格以內的所有敵軍部隊“攻擊”“防禦”降低10%，“遭受暴擊率”增加10%'
},{
    NAME: '遭受所有傷害降低30%', TYPE: '洛加 比蘿蒂絲 燕 歐米伽 澤瑞達 弗拉基亞 雪莉 約書亞 雷因法魯斯 銀狼 迪哈爾特',
    DMGDEC: 0.3, 
    DESC: '遭受所有傷害降低30%'
},{
    NAME: '風之纏繞', TYPE: '露娜',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '將自身的“魔防”的1.5倍代替“攻擊”'
},{
    NAME: '高階風之纏繞', TYPE: '露娜',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '將自身的"魔防"的1.5倍代替"攻擊"（該效果無法被驅散）'
},{
//可能要增加輸入欄位
    NAME: '聖靈的守護', TYPE: '阿卡婭',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '狼魂生命以外全部屬性的20%附加於阿卡婭'
},{
    NAME: '西卡之血(智力)', TYPE: '阿卡婭',
    HP: 0, ATK: 0, INT: 0.5, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '智力+50%'
},{
    NAME: '西卡之血(攻擊)', TYPE: '阿卡婭',
    HP: 0, ATK: 0.5, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊+50%'
},{
    NAME: '魔衛', TYPE: '妮絲蒂爾',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '被2格距離的遠程魔法攻擊時，可以進行反擊。'
},{
    NAME: '光之少女', TYPE: '艾絲蒂爾',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、防禦提升15%，護衛範圍提升至2格'
},{
    NAME: '金剛', TYPE: '艾絲蒂爾',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '造成的所有傷害提升10%，並將“攻擊”的10%增加到“防禦”上。'
},{
    NAME: '寒冰領域', TYPE: '伊露希亞',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '[指揮]周圍2格範圍內的所有敵軍所處地形視為“水中”，且無法觸發再行動'
},{
    NAME: '肉體強化', TYPE: '戶愚呂兄弟',
    HP: 0, ATK: 0.02, INT: 0, DEF: 0, MDEF: 0, DEX: 0.02, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊、技巧提升2%，可以累積，最多可以累積15個。'
},{
//不知道是幾個，沒人有
    NAME: '120%', TYPE: '戶愚呂兄弟',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '除生命以外全屬性提升20%（無法與超絕強化疊加）；攻擊前每移動1格，攻擊提升5%。（最多提升15%）；可以抵擋一次致命傷害，並且生命值恢復20%。（效果持續期間最多觸發1次）；攻擊後可以再次移動5格'
},{
    NAME: '戰鬥意志', TYPE: '戶愚呂兄弟',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '進入戰鬥前，恢復英雄攻擊1倍的生命值，如果處於[120%]狀態下恢復量則提升為攻擊的1.5倍'
},{
    NAME: '隱匿', TYPE: '燕',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '無法被敵軍普通攻擊及技能鎖定為目標（不可驅散，遭受傷害或造成傷害後，或相鄰1格範圍內有敵軍時，該效果失效）'
},{
    NAME: '潛行', TYPE: '澤瑞達',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0.3, DMGDEC: 0.3,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    CRITDMGINC: 0.3, MOVE: 4, 
    DESC: '暴擊率、暴擊傷害提升30%，遭受傷害降低30%，移動力提升4'
},{
    NAME: '嗜血魔劍', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0.3, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '士兵無法遭受治療。主動攻擊進入戰鬥時，傷害提升30%且免疫所有弱化效果；並在攻擊後，恢復造成傷害的50%的生命值'
},{
    NAME: '一擊絕塵', TYPE: '流星直擊',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '周圍1格沒有友軍時，傷害提升10%，且擊殺敵軍後，可以獲得再次移動2格的機會，並在行動結束時恢復20%生命。'
},{
    NAME: '王牌戰法', TYPE: '戰略大師',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '如果自己是[混合部隊]（英雄與士兵兵種不同），戰鬥中傷害額外提升15%。'
},{
    NAME: '帝國衝鋒', TYPE: '帝國之輝',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊前每移動1格，造成傷害提升5%（最多15%）。'
},{
    NAME: '希望之光', TYPE: '光之起源',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '本部隊有5個以上的強化效果時，戰鬥中造成傷害提升15%。持續4回合。'
},{
    NAME: '王女降臨', TYPE: '公主聯盟',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動對敵軍造成傷害後，可以額外追加一次[固定傷害]，傷害數值為敵軍剩餘生命的15%'
},{
    NAME: '星之所在', TYPE: '時空樞紐',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '範圍技能傷害提升20%'
},{
    NAME: '正義的裁決', TYPE: '光輝軍團',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0.2, DDMGDEC: 0,
    DESC: '被攻擊時，傷害額外提升20%。'
},{
    NAME: '神衛', TYPE: '雷丁',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '用“魔防”+“防禦”的1倍代替攻擊'
},{
    NAME: '正義對決', TYPE: '雷丁',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '相鄰1格的所有敵軍“移動力降低3，且無法進行護衛'
},{
    NAME: '居合一閃', TYPE: '真宮寺櫻',
    HP: 0, ATK: 0.1, INT: 0.1, DEF: 0.1, MDEF: 0.1, DEX: 0.1, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '除生命以外全屬性提升10%，可以累積，最高可以累積4層。'
},{
    NAME: '不滅的輝光', TYPE: '光輝軍團',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '生命80%以上時，戰鬥中造成傷害提升15%'
},{
    NAME: '迎頭痛擊', TYPE: '艾爾文 布琳達',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊”的20%增加到“防禦”上'
},{
    NAME: '孤芳永生', TYPE: '希琳卡',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGDEC: 0.2, DMGINC: 0.2,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '傷害提升20%，遭受傷害降低20%'
},{
    NAME: '絕殺', TYPE: '希琳卡',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動進入戰鬥前，如果目標周圍1格內有一名及以上敵軍，此次攻擊直接攻擊敵方英雄'
},{
    NAME: '帝國之力', TYPE: '帝國之輝',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '與克制的部隊交戰時，傷害額外提升20%'
},{
    NAME: '瞬身', TYPE: '萊恩哈特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGDEC: 0.3,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1,
    DESC: '移動力+1，自身部隊遭受傷害降低30%'
},{
    NAME: '劍氣', TYPE: '萊恩哈特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '主動戰鬥後，對周圍1圈內的所有敵軍造成0.1倍的範圍傷害。'
},{
    NAME: '灰之騎士', TYPE: '黎恩',
    HP: 0, ATK: 0.04, INT: 0.04, DEF: 0.04, MDEF: 0.04, DEX: 0.04, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '除生命以外全屬性提升4%，可以累積，最高可以累積5個'
},{
    NAME: '鬼人', TYPE: '黎恩',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGDEC: 0.3, DMGINC: 0.3,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1,
    DESC: '傷害提升30%，遭受傷害降低30%，移動力+1，並在對敵方部隊造成傷害後，對其施加1個隨機的弱化效果'
},{
    NAME: '掠陣', TYPE: '阿雷斯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0.08,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '暴擊率提升8%，可累積（最高累積5個）。'
},{
    NAME: '無畏颶風', TYPE: '阿雷斯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '造成傷害後，將自身周圍2圈內的所有敵軍傳送到自己身邊，並造成1圈0.15倍的範圍傷害；如果部隊具有[掠陣]效果，則可以再次移動4格'
},{
    NAME: '乘風', TYPE: '阿雷斯',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊前每移動1格，造成傷害提升5%（最多25%）。'
},{
    NAME: '異星之力', TYPE: '雷因法魯斯',
    HP: 0, ATK: 0.04, INT: 0.04, DEF: 0.04, MDEF: 0.04, DEX: 0.04, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '除生命以外全屬性提升4%，可累積，最高可以累積7個。'
},{
    NAME: '遊俠之心', TYPE: '西格瑪',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '自己所處的地形視為“樹林”'
},{
//沒宰相不確定
    NAME: '急行', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '移動力提升'
},{
    NAME: '重集軍伍', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '戰後士兵恢復30%生命值'
},{
    NAME: '不歸之森的妖精', TYPE: '蒂德莉特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '智力、防禦提升8%~24%'
},{
    NAME: '精靈之森', TYPE: '蒂德莉特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '[指揮]周圍2格內所有友軍移動時所有可以通過的地形都視為“樹林”。且部隊不會受到地形導致的移動力下降影響，並在行動結束時，恢復30%生命'
},{
    NAME: '精靈之舞', TYPE: '蒂德莉特',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '“移動時所有可以通過的地形都視為“樹林”，且部隊不會受到地形導致的移動力下降影響，並在行動結束時，恢復30%生命”'
},{
    NAME: '鋼之聖女', TYPE: '雅里安洛德',
    HP: 0, ATK: 0.05, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0, DMGDEC: 0.05, DMGINC: 0.05,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '攻擊提升5%，傷害提升5%，遭受傷害降低5%，移動力+1，最高可以累積3個。'
},{
    NAME: '物理屏障', TYPE: '雅里安洛德',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '受到第1次物理傷害時，遭受傷害降低90%'
},{
    NAME: '魔法屏障', TYPE: '雅里安洛德',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '受到第1次魔法傷害時，遭受傷害降低90%'
},{
    NAME: '涅槃', TYPE: '神崎堇',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '抵擋一次致命傷害，之後英雄生命值恢復10%，該狀態持續期間最多觸發一次復活效果'
},{
    NAME: '飛龍之舞', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '部隊普通攻擊射程+1；進入戰鬥前，如果自身技巧高於敵軍，會先於敵軍進行攻擊'
},{
    NAME: '聖衛', TYPE: '艾米莉亞',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '用“魔防”的1.6倍來代替“攻擊”，可以反擊2格的遠程攻擊'
},{
//需要測測看是不是強化
    NAME: '勇將的神力', TYPE: '艾米莉亞',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '部隊血量越高時，減少遭受物理傷害越多，最多減少30% '
},{
    NAME: '天禦聖境', TYPE: '艾米莉亞',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    TRUEDMGDEC: 0.2, CRITDMGDEC: 0.3,
    DESC: '周圍3格以內的所有友軍部隊遭受暴擊傷害降低30%，遭受固定傷害降低20%。'
},{
    NAME: '神威(光環)', TYPE: '尤莉婭',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '使自身周圍2格所有敵軍“移動力降低3，且無法進行護衛”'
},{
    NAME: '神威(固傷)', TYPE: '尤莉婭',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '進入戰鬥前，對敵軍造成自身智力2倍的[固定傷害]，並恢復自身智力2倍的生命'
},{
    NAME: '聖獸印記', TYPE: '光之起源',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '部隊生命百分比高於敵軍時，主動攻擊進入戰鬥時，造成傷害提升15%。'
},{
    NAME: '野獸震懾(加攻)', TYPE: '古巨拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '將“魔防”和“防禦” 40%增加到“攻擊”上'
},{
    NAME: '野獸震懾(光環)', TYPE: '古巨拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '相鄰1格的所有敵軍"無法移動且不能護衛"'
},{
    NAME: '巨龍屏障(魔防轉攻)', TYPE: '古巨拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '用“魔防”的1.4倍代替“攻擊”'
},{
    NAME: '巨龍屏障', TYPE: '古巨拉',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '周圍2格內的所有友軍免疫"固定傷害"'
},{
    NAME: '治癒之光', TYPE: '一般',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '戰後回復蒂亞莉絲智力3倍的生命。'
},{
    NAME: '黑暗之力', TYPE: '黑暗輪迴',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '使用技能時，依據其冷卻時間獲得傷害增加效果，每多1回合冷卻時間，則傷害提升3% (最多提升20% )'
},{
    NAME: '魔神降臨', TYPE: '麗可麗絲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '在該狀態下施加的[生命之息]變為[黑暗之息]：“當敵軍單位移動至其上，在行動結束時獲得1個隨機弱化效果，並受到一次[固定傷害]傷害數值為麗可麗絲智力的1.2倍。'
},{
    NAME: '憤怒', TYPE: '浦飯幽助',
    HP: 0, ATK: 0.1, INT: 0.1, DEF: 0.1, MDEF: 0.1, DEX: 0.1, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1,
    DESC: '除生命以外全屬性提升10%，移動力+1，部隊射程+1'
},{
    NAME: '爆發', TYPE: '浦飯幽助',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0.3, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    MOVE: 1,
    DESC: '移動力+1，主動攻擊時，傷害提升30%'
},{
    NAME: '魔人', TYPE: '浦飯幽助',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '戰後可恢復生命，恢復量為部隊造成傷害的30%的生命'
},{
    NAME: '魔強一統', TYPE: '時空樞紐',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRITRATEINC: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRITRATEINC: 0, ODMGINC: 0, ODMGDEC: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRITRATEINC: 0, DDMGINC: 0, DDMGDEC: 0,
    DESC: '使用單體技能時，傷害提升15%'
}]

/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdArmor(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '重甲'];
            break;
        case '槍兵':
            holds = ['NO', '重甲'];
            break;
        case '騎兵':
            holds = ['NO', '重甲'];
            break;
        case '飛兵':
            holds = ['NO', '輕甲'];
            break;
        case '弓兵':
            holds = ['NO', '輕甲'];
            break;
        case '刺客':
            holds = ['NO', '輕甲'];
            break;
        case '水兵':
            holds = ['NO', '輕甲'];
            break;
        case '法師':
            holds = ['NO', '布甲'];
            break;
        case '魔物':
            holds = ['NO', '布甲'];
            break;
        case '僧侶':
            holds = ['NO', '布甲'];
            break;
        case '龍':
            holds = ['NO', '輕甲'];
            break;
    }
    /* add new cases to new heros */
    /*
    switch(job){
        case '':
            holds.push('');
            break;
    }
    */
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first armor found */
function displayArmor(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdArmor(side, army, job);

    var armorList = [];
    // get all usable armorList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var armorfilter = armor.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<armorfilter.length; j++){
            // get NAMES only
            armorList.push(armorfilter[j].NAME);
        }
    }
    // display armor by NAMES
    for(var i=0; i<armorList.length; i++){
        if(side == 'defense'){
            document.getElementById(armorList[i]+'d').style = '';
            // select first item found when no armor selected
            if(!combat.defArmSel){
                document.getElementById(armorList[i]+'d').classList.add('selected');
                combat.defArmor = armor.find(x => x.NAME === armorList[i]);
                document.getElementById('defArmor').innerHTML = "盔甲:" + armorList[i];
                combat.defArmSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(armorList[i]).style = '';
            // select first item found when no armor selected
            if(!combat.offArmSel){
                document.getElementById(armorList[i]).classList.add('selected');
                combat.offArmor = armor.find(x => x.NAME === armorList[i]);
                document.getElementById('offArmor').innerHTML = "盔甲:" + armorList[i];
                combat.offArmSel = true;
            }
        }
    }
    // select first item when armor is selected
    if(side == 'defense') selectArmor(side, armorList[0]+'d');
    else if(side == 'offense') selectArmor(side, armorList[0]);
};
function hideArmor(side){
    var armorList = document.getElementsByClassName('armor ' + side);
    for(var i=0; i<armorList.length; i++){
        armorList[i].style = 'display: none;';
    }
};
function selectArmor(side, armorName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        armorName = armorName.slice(0, -1);
        // de-select old armor
        if(document.getElementById(combat.defArmor.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defArmor.NAME + 'd').classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName+'d').classList.add('selected');
        combat.defArmor = armor.find(x => x.NAME === armorName);
        document.getElementById('defArmor').innerHTML = "盔甲:" + armorName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old armor
        if(document.getElementById(combat.offArmor.NAME).classList.contains('selected')){
            document.getElementById(combat.offArmor.NAME).classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName).classList.add('selected');
        combat.offArmor = armor.find(x => x.NAME === armorName);
        document.getElementById('offArmor').innerHTML = "盔甲:" + armorName;
    }
};

function loadArmorDesc(side, equipment){
    for(let i=0; i<armor.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == armor[i].NAME) ||
            (side == 'offense' && equipment == armor[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseArmor = document.getElementById(equipment);
            let x = baseArmor.getBoundingClientRect().top + 30;
            let y = baseArmor.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = armor[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = armor[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

