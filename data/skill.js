/* 技能/基本資訊/倍率/克制/增傷/強弱化/無視防禦/戰前後固傷/敘述 */
var skill = [{
    NAME: '普攻(物)', COST: 0,
    TYPE: '物理傷害', CD: 0, RANGE: '?', AREA: '單體',
    RATE: 1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '用攻擊普攻，造成1倍傷害。'
},{
    NAME: '普攻(法)', COST: 0,
    TYPE: '魔法傷害', CD: 0, RANGE: '?', AREA: '單體',
    RATE: 1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '用智力普攻，造成1倍傷害。'
},{
    NAME: '火球', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '步兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「步兵」有特效。'
},{
    NAME: '雷擊', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '騎兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「騎兵」有特效。'
},{
    NAME: '冰凍', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '槍兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「槍兵」有特效。'
},{
    NAME: '風刃', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '飛兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「飛兵」有特效。'
},{
    NAME: '暗鐮', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE: 1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0.3, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.3倍傷害。無視敵軍30%的魔防。戰後，恢復造成傷害的50%的生命值'
},{
    NAME: '淨化', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '魔物',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，目標為「魔物」時有特效。戰後去除目標身上2個強化效果。'
},{
    NAME: '聖言', COST: 2,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '魔物',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「魔物」有特效。戰後，為生命最低的友軍恢復生命。恢復量為施法者智力的4倍。'
},{
    NAME: '元素毀滅', COST: 3,
    TYPE: '魔法傷害', CD: 4, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '步兵 槍兵 騎兵 飛兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，進入戰鬥前士兵射程+1，戰鬥後，恢復傷害數值30%的生命。對「步兵」、「騎兵」、「槍兵」、「飛兵」有特效。'
},{
    NAME: '冰槍', COST: 2,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '槍兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害。對[槍兵]有特效。戰後令命中的格子獲得2回合的特殊效果[霜境]：“當敵軍移動至其上時獲得「移動力- 2」 ，持續1回合”'
},{
    NAME: '聖裁', COST: 2,
    TYPE: '魔法傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE: 1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無法再行動 無法遭受強化', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 5,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.6倍傷害。戰前驅散敵軍5個強化狀態。並使其“無法再行動”以及“無法遭受強化狀態”，持續2回合，該效果無法被驅散。'
},{
    NAME: '懲戒', COST: 2,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍的傷害。戰鬥後，恢復傷害數值20%的生命。攜帶近戰士兵時，士兵也會同時進行攻擊。'
},{
    NAME: '救贖', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍的傷害。戰鬥後，恢復傷害數值20%的生命。攜帶近戰士兵時，士兵也會同時進行攻擊。'
},{
    NAME: '暗影之矛', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '僧侶',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「僧侶」有特效。'
},{
    NAME: '暗物質', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '3格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '治療效果降低100%', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害。並使敵軍“治療效果降低100% ”，持續2回合。（該效果無法被驅散）'
},{
    NAME: '火柱', COST: 2,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '步兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害。對[步兵]有特效。戰後令命中的格子及其周圍1格獲得2回合的特殊效果[燼火]：“當敵軍移動至其上，在行動結束時，受到最大生命值15%的固定傷害”'
},{
    NAME: '蕾恩·殲滅', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE: 1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.3倍傷害。如果敵軍身上有3個及以上的弱化狀態，則本次攻擊降低敵方100%的魔防，且敵軍無法反擊。'
},{
    NAME: '破滅之矛', COST: 2,
    TYPE: '魔法傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE: 1.1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.1倍傷害。攻擊前每移動一格，傷害提升10%（最多提升50%）。並使得敵軍隨機獲得一個不可驅散的強力弱化效果，持續1回合。攜帶近戰士兵時，士兵也會同時進行攻擊。'
},{
    NAME: '神聖祈福', COST: 3,
    TYPE: '魔法傷害', CD: 4, RANGE: '2格', AREA: '單體',
    RATE: 1.6, COUNTER: '無',
    STREFF: '造成傷害提升20% 遭受傷害提升20%', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.6倍傷害。戰後，為全體其他友軍恢復生命值，恢復量為自身智力的2倍，並驅散1個弱化狀態。攜帶近戰士兵時，士兵也會同時進行攻擊。攻擊前，本部隊傷害提升20%，遭受傷害降低20%，持續2回合。如果敵軍英雄為「魔物」，則在戰前令其“眩暈”，持續1回合，該效果不可驅散。'
},{
    NAME: '神威', COST: 2,
    TYPE: '魔法傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE: 1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.6倍的傷害。戰鬥前獲得效果：進入戰鬥前，對敵軍造成自身智力2倍的[固定傷害]，並恢復自身智力2倍的生命，持續2回合。戰鬥後，獲得[神威]效果：使自身周圍2格所有敵軍“移動力降低3，且無法進行護衛”，持續1回合。'
},{
    NAME: '精靈之息', COST: 2,
    TYPE: '魔法傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE: 1.6, COUNTER: '無',
    STREFF: '種樹', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.6倍的傷害。戰鬥前獲得效果：進入戰鬥前，對敵軍造成自身智力2倍的[固定傷害]，並恢復自身智力2倍的生命，持續2回合。戰鬥後，獲得[神威]效果：使自身周圍2格所有敵軍“移動力降低3，且無法進行護衛”，持續1回合。'
},{
    NAME: '精靈之舞', COST: 3,
    TYPE: '魔法傷害', CD: 6, RANGE: '2格', AREA: '單體',
    RATE: 1.6, COUNTER: '無',
    STREFF: '種樹', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[被動]行動結束時，使相鄰的1個友軍免疫所有弱化效果，持續1回合。[魔法傷害]攻擊單個敵軍，造成1.6倍傷害，攜帶近戰士兵時，士兵也會同時進行攻擊。戰前使自身獲得[精靈之舞]：“移動時所有可以通過的地形都視為“樹林”，且部隊不會受到地形導致的移動力下降影響，並在行動結束時，恢復30%生命” ，持續3回合。戰後可以再移動3格。（該技能不會受到近戰傷害減免影響）'
},{
    NAME: '虹吸', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE: 1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害。戰鬥後，恢復傷害數值30%的生命。'
},{
    NAME: '風斬', COST: 2,
    TYPE: '魔法傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE: 1.3, COUNTER: ' ',
    STREFF: '無', WEAKEFF: '攻擊、智力降低20%', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 1,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.3倍傷害，攜帶近戰士兵時，士兵也會同時進行攻擊。戰前驅散敵軍1個強化狀態，並使其“攻擊”“智力”降低20%，持續1回合。'
},{
    // 妖狐狀態下士兵會一起攻擊，不知是否有近戰減傷
    NAME: '魔界植物', COST: 2,
    TYPE: '魔法傷害', CD: 6, RANGE: '2格', AREA: '單體',
    RATE: 1.3, COUNTER: ' ',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0.5, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.3倍傷害，並使敵軍獲得效果[魔界種子]：“回合行動結束時，受到藏馬智力2倍的[固定傷害]；被魔界植物技能攻擊時，魔防額外降低50% ”。在[妖狐]狀態下該技能射程+1，並且士兵可以同時進行攻擊。'
},{
    NAME: '一閃', COST: 2,
    TYPE: '物理傷害', CD: 1 , RANGE: '1格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF:'暴擊提升20%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害，暴擊率提升20%。'
},{
    NAME: '會心直擊', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍傷害。戰鬥前每移動1格，技巧提升10%。（最多提升30%）'
},{
    NAME: '劍魂', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.8, COUNTER: '無',
    STREFF: '無', WEAKEFF: '禁療', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 5,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.8倍傷害。戰前驅散敵軍5個強化效果。並使其「無法被治療」，持續2回合。無法被驅散。'
},{
    NAME: '力突', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '力突', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的戰鬥傷害。戰鬥前，獲得[力突]效果:用「防禦」的1.6倍代替「攻擊」，持續2回合。'
},{
    NAME: '千騎', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.7, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.7倍傷害。戰後，使對方移動力-2，且無法進行護衛，持續2回合，無法被驅散。'
},{
    NAME: '壓制射擊', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.25, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.25倍的戰鬥傷害。如果自身處於防禦地形上，則在戰前造成1次[固定傷害]。（傷害數值為英雄攻擊的1倍）。'
},{
    NAME: '雙連擊', COST: 1,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1倍的戰鬥傷害。有40%概率進行2次攻擊。'
},{
    NAME: '回刺', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '暴擊提升20%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]無視護衛攻擊單個敵軍，造成1.2倍傷害，暴擊率提升20%。'
},{
    NAME: '迴旋', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '3格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]造成1.2倍物理傷害。若本次攻擊沒有被護衛，則在戰鬥結束後造成[位移]效果：與目標位置互換；同時自身遭受所有傷害降低20%，持續2回合。'
},{
    NAME: '大喝', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE: 1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '攻擊、智力降低20%', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 2,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍傷害。戰前驅散敵軍2個強化效果。並使其“攻擊、智力”降低20%，持續1回合。'
},{
    NAME: '奔雷', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE: 1.5, COUNTER: '無',
    STREFF: '御風', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的戰鬥傷害。戰前獲得[御風]:生命大於50%進入戰鬥時，遭受傷害降低15%。持續2回合。'
},{
    NAME: '威風衝陣', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 3,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害，戰前驅散敵軍3個強化狀態。進入戰鬥前自身2圈範圍內每有一個敵軍，暴擊傷害提升8%（最高32%）。成功消滅敵軍時，該技能的冷卻時間減少3回合。'
},{
    NAME: '審判', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '雙防提升30%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.2倍傷害。進入戰鬥之前，本部隊防禦、魔防提升30%，持續2回合。'
},{
    NAME: '弱點狙擊', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍傷害。敵軍身上若有弱化狀態，則攻擊前無視敵方20%的“防禦”，並在攻擊後令本技能的冷卻時間減少2回合。'
},{
    NAME: '彈指', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍傷害。攜帶近戰士兵時，士兵也會同時進行攻擊。並造成[位移]效果：將目標擊退2格，同時使其“攻擊”和“技巧”降低20% ,持續2回合。'
},{
    NAME: '強風狙擊', COST: 2,
    TYPE: '物理傷害', CD: 4, RANGE: '4格', AREA: '單體',
    RATE:  0.8, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成0.8倍的戰鬥傷害。距離目標越遠，則傷害越高，每相隔多1格距離則英雄傷害增加15%（最高90%）。戰鬥後，自身移動力+2，持續1回合。'
},{
    NAME: '影襲', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]無視護衛直接攻擊單個敵軍，造成1.3倍傷害。'
},{
    NAME: '投槍', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  0.8, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成0.8倍傷害。攻擊前每移動一格，傷害提升20%（最多提升60%）。戰鬥後，可以獲得再次移動2格的機會。攜帶近戰士兵時，士兵也會同時進行攻擊。'
},{
    NAME: '掠奪', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]無視護衛直接攻擊單個敵軍，造成1.1倍傷害。戰鬥後，偷取對方最多3個強化效果。'
},{
    NAME: '掠空折翼', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的傷害，如果目標部隊的移動方式為「飛行」，則戰鬥前本部隊遭受所有傷害降低15%，造成傷害提升15%。'
},{
    NAME: '撞擊', COST: 1,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.2倍傷害。並造成[位移]效果：將目標撞開2格，同時使其移動力降低2，且無法進行護衛，持續1回合。'
},{
    NAME: '斬陽', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE: 1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍傷害。戰鬥後，恢復傷害數值30%的生命。'
},{
    NAME: '晶耀突襲', COST: 2 ,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍的傷害。戰後使敵軍“飾品技能失效”，持續2回合，無法被驅散。當目標為非玩家英雄時，該效果替換為"遭受傷害提升30%"，持續2回合，無法被驅散。'
},{
    NAME: '暗影突擊', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '攻擊、智力降低20%', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '物理傷害]攻擊單個敵軍，造成1.4倍傷害。進入戰鬥前使敵軍“攻擊”“智力”降低20%，持續2回合。'
},{
    NAME: '最終審判', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: ' 格', AREA: '單體',
    RATE: 1.6 , COUNTER: '無',
    STREFF: '無', WEAKEFF: '部隊射程-1', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍造成1.6倍的傷害，對敵軍所在地形施加加[庇護之劍]：“該地形擁有"[指揮]：周圍1格以內的所有友軍部隊除生命以外全屬性提升10% "，持續3回合。”戰前令敵軍“部隊射程-1 ”，持續1回合，該效果不可驅散。自身在[庇護之劍]效果範圍內時，戰後可以獲得再次移動3格的機會。當羅莎莉婭擁有1個[信仰]時[庇護之劍]的指揮範圍提升至2格，擁有3個[信仰]時[庇護之劍]追加指揮效果：“主動攻擊進入戰鬥，戰後恢復造成傷害的20%的生命值。'
},{
    NAME: '次元斬', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '隨機弱化2個', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 2,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍傷害。攜帶近戰士兵時，士兵也會同時進行攻擊。戰前將敵軍的2個強化狀態轉換成隨機的弱化狀態。'
},{
    NAME: '正義', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '聖衛', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的戰鬥傷害。戰鬥前，獲得[聖衛]效果：用“魔防”的1.6倍來代替“攻擊”，可以反擊2格的遠程攻擊，持續2回合。'
},{
    NAME: '正義對決', COST: 3,
    TYPE: '物理傷害', CD: 4, RANGE: '3格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '高階神衛', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[被動]替相鄰友軍承受所有攻擊。[主動]指定1名敵軍，令其傳送至自身周圍1格內最近的空位上，自身獲得獲得[高階神衛]效果：用“魔防”+“防禦”的1倍來代替“攻擊”，護衛範圍提升為2格，持續4回合（該效果無法被驅散）。之後對目標造成1.2倍的物理傷害。戰鬥後獲得[正義對決]效果：使相鄰1格的所有敵軍“移動力降低3，且無法進行護衛”，持續2回合。'
    },{
    NAME: '氣刃', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍傷害。攜帶近戰士兵時，士兵也會同時進行攻擊。'
},{
    NAME: '水槍', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的傷害。在水中傷害為2倍'
},{
    NAME: '浪子回頭', COST: 3,
    TYPE: '物理傷害', CD: 4, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 2,
    DISC: '[物理傷害]無視護衛直接攻擊單個敵軍，造成1.3倍傷害，暴擊率提升20%。如果發生暴擊，則在戰鬥後，恢復傷害數值30%的生命。戰鬥前，偷取敵軍最多2個強化狀態。本次攻擊即使沒有擊殺敵軍也會強制發動自身所有擊殺目標後的觸發效果。'
},{
    //物傷OR魔傷 數值浮動
    NAME: '混沌螺旋', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍傷害，攜帶近戰士兵時，士兵也會同時進行攻擊。如果敵軍物防低於魔防，在戰鬥前將智力的70%附加於攻擊之上；反之，則在戰鬥前將攻擊的70%附加於智力之上，並造成魔法傷害。同時使得敵軍獲得[傷口詛咒]：“被施加的治療直接轉變為治療量20%的傷害”，持續2回合。如果敵軍英雄為「僧侶」，則在戰前令其“技能射程-1 ”，持續1回合，該效果不可驅散。'
},{
    NAME: '激浪', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的傷害。戰鬥後，將自己移動時所有可以通過的地形都視為“水中”，持續1回合。'
},{
    NAME: '靈丸', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍的戰鬥傷害。攜帶近戰士兵時，士兵也會同時進行攻擊。如果處於[魔人]狀態下，則該技能射程+1，傷害額外提升30%，且成功消滅目標後，冷卻時間減少2回合。'
},{
    NAME: '烈陽', COST: 2,
    TYPE: '物理傷害', CD: 4, RANGE: '1格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '神衛', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍傷害。戰鬥前，獲得[神衛]效果：用“魔防”+“防禦”的1倍來代替“攻擊”，持續2回合。戰鬥後，恢復造成傷害數值50%的生命。'
},{
    NAME: '狙擊', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.4, COUNTER: '飛兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍的戰鬥傷害，對「飛兵」有特效。戰鬥後，50%的概率使敵軍“無法使用技能”，持續1回合。（該效果無法被驅散）'
},{
    NAME: '狙足', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE:  1.4, COUNTER: '飛兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍的戰鬥傷害，對「飛兵」有特效。戰鬥後，使得敵軍的移動力降低1，且無法進行護衛，持續1回合。（該效果無法被驅散）'
},{
    NAME: '猛撞', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害，並造成[位移]效果：將目標撞開2格，同時使“防禦”降低20%，且無法進行護衛，持續2回合。'
},{
    NAME: '璨晶綻放', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍的傷害，戰後使敵軍“武器技能失效”，持續2回合，無法被驅散，當目標為非玩家英雄時，該效果替換為"造成傷害降低30%"，持續2回合，無法被驅散。戰鬥後，對自身周圍2格內的所有敵軍造成0.2倍範圍傷害，並使命中的地形獲得1回合的特殊效果[璨晶]（該效果與天賦的[璨晶]效果一致)'
},{
    NAME: '疾突', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '雙防提升30%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍攻擊傷害。戰鬥前，部隊的防禦和魔防提升30%。'
},{
    NAME: '疾霆閃襲', COST: 3,
    TYPE: '物理傷害', CD: 4, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍傷害。如果目標部隊的移動方式不是「飛行」，會先於敵軍進行攻擊。若目標擁有“龍印”效果，則在戰前可以獲得[不屈]：“抵擋一次致命傷害，並且生命值恢復20%。每場戰鬥最多觸發1次”，持續2回合。'
},{
    NAME: '百烈拳', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '1格', AREA: '單體',
    RATE:  1.3, COUNTER: '無',
    STREFF: '遭受傷害降低20%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍的傷害，戰鬥前本部隊遭受所有傷害降低20%，持續1回合。如果處於[魔人]狀態下，則該技能傷害額外提升30%，遭受傷害額外降低20%，且成功消滅目標後，冷卻時間減少2回合。'
},{
    NAME: '盾擊', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '1格', AREA: '單體',
    RATE:  1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '暈眩', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1倍傷害。進戰鬥前，使敵軍“暈眩” 1回合。'
},{
    NAME: '破刃', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的戰鬥傷害。戰鬥後，使得敵軍“造成傷害”降低20%，持續2回合。'
},{
    NAME: '破夢', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害。攜帶近戰士兵時，士兵也會同時進行攻擊。如果自身周圍3格範圍內沒有友軍部隊，此次攻擊無視護衛，且在消滅敵軍後，可以獲得再次移動2格的機會。'
},{
    NAME: '破陣', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '1格', AREA: '單體',
    RATE:  1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1倍傷害。並造成[位移]效果：將目標撞開2格，同時使其下回合無法行動。'
},{
    NAME: '神射', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '飛兵',
    STREFF: '造成傷害增加30%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍的戰鬥傷害，對「飛兵」有特效。戰鬥前，造成傷害提升30%，戰鬥後，使得敵軍“無法遭受任何強化狀態”，持續2回合。'
},{
    NAME: '穿甲', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的戰鬥傷害。戰鬥後，降低敵軍防禦30%，持續2回合。'
},{
    NAME: '突擊', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1倍傷害，並使得敵軍“無法被治療”，持續1回合。攻擊前每移動一格，傷害提升20%。（最多提升60%）'
},{
    NAME: '絕命一擊', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '2格', AREA: '單體',
    RATE: 1.4 , COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害。如果進入戰鬥前自己攜帶的士兵已經全部陣亡，則本次攻擊可以無視護衛，並直接對英雄造成傷害。'
},{
    NAME: '絕戮', COST: 2,
    TYPE: '物理傷害', CD: 0, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '攻擊、防禦降低10% 遭受暴擊率增加10%', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[被動]抵擋一次致命傷害，並且生命值恢復20%。觸發此效果後將此技能替換為[逆襲]。[物理傷害]攻擊單個敵軍，造成1.5倍傷害。進入戰鬥前，自身獲得[暗之領域]效果：周圍3格以內的所有敵軍部隊“攻擊”“防禦”降低10%，“遭受暴擊率”增加10%，持續2回合。使用後將此技能替換為[逆襲]。'
},{
    NAME: '絕閃', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE: 1.3, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 2,
    DISC: '[物理傷害]無視護衛直接攻擊單個敵軍，造成1.3倍傷害。戰鬥前，偷取對方最多2個強化狀態。'
},{
    NAME: '翡翠破風', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '飛兵',
    STREFF: '無', WEAKEFF: '隨機弱化2個', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 2,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍的戰鬥傷害。對「飛兵」有特效。戰前將敵軍2個強化狀態轉化為隨機弱化效果，每轉化1個強化狀態則獲得20%的傷害加成。戰後，使自己所處的地形視為“樹林”，持續1回合。'
},{
    NAME: '翡翠魔矢', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '飛兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍的戰鬥傷害。對「飛兵」有特效。戰鬥前驅散自身最多3個異常狀態，每驅散1個弱化狀態，則獲得10%的傷害加成，並在戰後將驅散掉的所有異常狀態附加到目標身上。'
},{
    NAME: '背摔', COST: 1,
    TYPE: '物理傷害', CD: 1, RANGE: '1格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.2倍的傷害。若本次攻擊沒有被護衛，則在戰鬥結束後造成[位移]效果：將敵軍移動至自身身後一格的空位上。'
},{
    NAME: '自由之刃', COST: 2,
    TYPE: '物理傷害', CD: 2, RANGE: '1格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '被動技能失效', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍的傷害。戰鬥前使得敵軍“所有被動技能失效”，持續1回合。'
},{
    NAME: '血腥之凜', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '2格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍傷害，攜帶近戰士兵時，士兵也會同時進行攻擊。戰鬥後，恢復傷害數值30%的生命。如果目標相鄰1格每有一個敵軍則此次攻擊無視其20%防禦（上限40%）；如果目標周圍2格沒有敵軍時，則此次攻擊擊殺目標後可以再次行動。（此再行動效果不能在同一回合連續觸發）'
},{
    NAME: '詭狙', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE:  1.3, COUNTER: '飛兵',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.3倍的戰鬥傷害。對「飛兵」有特效。進入戰鬥前如果自身技巧高於敵軍，戰後使敵軍“移動力” -2，反之則使敵軍“攻擊”“智力”降低30%，持續1回合。（該效果無法被驅散）'
},{
    NAME: '轟雷一閃', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍傷害。戰鬥後，恢復傷害數值100%的生命。成功消滅目標時，該技能的冷卻時間減少4回合；反之，使得敵軍[眩暈]，持續1回合。（該效果無法被驅散）'
},{
    NAME: '迅雷', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.6倍的戰鬥傷害。戰鬥後獲得[疾風]和[御風]效果，持續2回合。'
},{
    NAME: '迎頭痛擊', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.7, COUNTER: '無',
    STREFF: '攻擊20%附加至防禦', WEAKEFF: '被動技能失效', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.7倍的戰鬥傷害。戰鬥前獲得效果:將“攻擊”的20%增加到“防禦”上，並使得敵軍“所有被動技能失效”，持續2回合。該效果無法被驅散。'
},{
    NAME: '連閃', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '暴擊提升20%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害，暴擊率提升20%。成功消滅敵軍時，該技能的冷卻時間減少4回合。戰鬥前，對敵方造成一次[固定傷害]；如果發生暴擊，戰鬥後，再造成一次[固定傷害]。（傷害數值為英雄攻擊的1倍）'
},{
    NAME: '逆襲', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.7, COUNTER: '無',
    STREFF: '御風', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.7倍傷害。進入戰鬥前獲得[御風]效果，持續2回合。擊殺目標後，將此技能替換為[絕戮]。'
},{
    NAME: '邪王炎殺劍', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE: 1.2, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 2,
    DISC: '[物理傷害]無視護衛攻擊單個敵軍，造成1.2倍傷害，戰鬥前驅散敵軍2個強化狀態。如果發生暴擊，戰後對敵軍和自己造成一次[固定傷害]（傷害數值為英雄攻擊的2倍）。若自身處於[黑龍波]效果下，則不會遭受副作用。'
},{
    NAME: '邪王炎殺煉獄焦', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: ' 2格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害。如果發生暴擊，戰鬥後對敵軍和自己造成[邪火]：“遭受所有傷害提升15%，被施加的治療直接轉變為治療量50%的傷害。持續2回合。（該效果無法被驅散）”。若自身處於[黑龍波]效果下，則不會遭受副作用。'
},{
    NAME: '重擊', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '1格', AREA: '單體',
    RATE:  1.2, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.2倍傷害。如果自身處於防禦地形上，則在戰前使敵軍“暈眩”，持續1回合。'
},{
    NAME: '野獸震懾', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '物防與魔防的40%附加至攻擊', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍傷害。戰鬥前獲得[野獸震懾]效果：將“魔防”和“防禦” 40%增加到“攻擊”上，並使相鄰1格的所有敵軍“無法移動且不能護衛”，持續1回合。'
},{
    NAME: '銀色之矛', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '2格', AREA: '單體',
    RATE:  1.4, COUNTER: '魔物',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '有',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍傷害，對「魔物」有特效。攜帶進展士兵時，士兵也會同時進行攻擊。（該效果不會受到近戰傷害減免影響）自身在[庇護之劍]效果範圍內時，戰後可以獲得再次移動3格的機會。'
},{
    NAME: '雷光', COST: 2,
    TYPE: '物理傷害', CD: 3, RANGE: '1格', AREA: '單體',
    RATE:  1.5, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.5倍的戰鬥傷害。成功消滅敵軍時，該技能的冷卻時間減少3。'
},{
    NAME: '雷閃', COST: 2,
    TYPE: '物理傷害', CD: 4, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍。造成1.6倍的戰鬥傷害。成功消滅目標時，該技能的冷卻時間減少3回合；反之，則可以再次行動，但是遭到士氣低落效果：“造成傷害降低50% ”，持續1回合。'
},{
    NAME: '青龍破陣', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.7, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: ''
},{
    NAME: '領戰迅擊', COST: 3,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.6, COUNTER: '無',
    STREFF: '暴擊提升20%', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.7倍的傷害。戰鬥後，在行動結束時，對自身周圍1圈內的所有敵軍造成0.3倍範圍傷害，並造成[傳送]效果：令命中的敵軍位置發生變化，同時施加隨機的弱化效果。'
},{
    NAME: '黑靈丸', COST: 3,
    TYPE: '物理傷害', CD: 4, RANGE: '2格', AREA: '單體',
    RATE:  1.4, COUNTER: '無',
    STREFF: '無', WEAKEFF: '無', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.4倍的戰鬥傷害。攜帶近戰士兵時，士兵也會同時進行攻擊。如果處於[魔人]狀態下，則該技能射程+1，傷害額外提升30%，且成功消滅目標後，冷卻時間減少3回合；反之，使其“無法被治療”，持續2回合，該效果無法被驅散。'
},{
    NAME: '黑耀突擊', COST: 2,
    TYPE: '物理傷害', CD: 5, RANGE: '1格', AREA: '單體',
    RATE:  1.1, COUNTER: '無',
    STREFF: '無', WEAKEFF: '傷口詛咒20%', SOLDATK: '無',
    NEGDEF: 0, NEGMDEF: 0, DISPERSE: 0,
    DISC: '[物理傷害]攻擊單個敵軍，造成1.1倍傷害，並造成[位移]效果：將目標撞開2格。攻擊前每移動一格，傷害提升20%（最多提升60%）。戰鬥前使得敵軍獲得[傷口詛咒]：“被施加的治療直接轉變為治療量20%的傷害”，持續1回合。（該效果無法被驅散）'
}];
