function loadJidianQuestions() {
    return [
        {
            question: '电流速断保护的特点是：',
            options: ['保护范围随运行方式变化', '能保护线路全长', '动作时限较长', '不需要整定'],
            correct: 0,
            category: 'jidian',
            explanation: '电流速断保护的保护范围受系统运行方式影响较大，不能保护线路全长。'
        },
        {
            question: '三段式电流保护包括：',
            options: ['I段、II段、III段', '过流、速断、零序', '定时限、反时限、瞬时', '主保护、后备保护、辅助保护'],
            correct: 0,
            category: 'jidian',
            explanation: '三段式电流保护通常指电流速断（I段）、限时电流速断（II段）和定时限过电流（III段）。'
        },
        {
            question: '距离保护测量的是：',
            options: ['电流', '电压', '阻抗', '功率'],
            correct: 2,
            category: 'jidian',
            explanation: '距离保护通过测量故障点到保护安装处的阻抗来判断故障位置。'
        },
        {
            question: '零序保护主要用于：',
            options: ['相间短路', '接地故障', '过负荷', '低电压'],
            correct: 1,
            category: 'jidian',
            explanation: '零序保护专门用于检测接地故障，利用零序电流实现选择性保护。'
        },
        {
            question: '重合闸的作用是：',
            options: ['提高供电可靠性', '限制短路电流', '改善功率因数', '调节电压'],
            correct: 0,
            category: 'jidian',
            explanation: '自动重合闸装置可以在故障消除后自动合闸，提高供电可靠性。'
        }
    ];
}
