export function loadXitongQuestions() {
    return [
        {
            question: '电力系统的频率主要由什么决定：',
            options: ['有功功率平衡', '无功功率平衡', '电压水平', '线路阻抗'],
            correct: 0,
            category: 'xitong',
            explanation: '电力系统频率由有功功率平衡决定，有功不足频率下降，有功过剩频率上升。'
        },
        {
            question: '电力系统的电压主要由什么决定：',
            options: ['有功功率平衡', '无功功率平衡', '频率', '负荷大小'],
            correct: 1,
            category: 'xitong',
            explanation: '电力系统电压水平主要由无功功率平衡决定，无功不足电压下降。'
        },
        {
            question: '潮流计算的目的是：',
            options: ['计算各节点电压和功率分布', '计算短路电流', '计算频率', '计算保护定值'],
            correct: 0,
            category: 'xitong',
            explanation: '潮流计算用于确定电力系统在给定运行条件下各节点的电压和功率分布。'
        },
        {
            question: '电力系统的备用容量包括：',
            options: ['负荷备用、事故备用、检修备用、国民经济备用', '有功备用、无功备用', '旋转备用、非旋转备用', '以上都对'],
            correct: 3,
            category: 'xitong',
            explanation: '电力系统备用容量包括多种类型：负荷备用、事故备用、检修备用、国民经济备用，也可分为有功/无功备用、旋转/非旋转备用。'
        },
        {
            question: '同步发电机的功角特性描述的是：',
            options: ['有功功率与功角的关系', '无功功率与电压的关系', '电流与电压的关系', '频率与功率的关系'],
            correct: 0,
            category: 'xitong',
            explanation: '功角特性描述同步发电机输出的有功功率与功角（转子磁极与定子磁场夹角）之间的关系。'
        }
    ];
}
