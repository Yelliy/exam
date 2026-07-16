function loadShebeiQuestions() {
    return [
        {
            question: '断路器的作用是：',
            options: ['正常运行时接通电路', '故障时断开电路', '隔离电源', 'A和B都对'],
            correct: 3,
            category: 'shebei',
            explanation: '断路器既能在正常运行时接通电路，也能在故障时快速断开电路，保护设备安全。'
        },
        {
            question: '隔离开关的主要作用是：',
            options: ['切断负荷电流', '隔离电源', '灭弧', '保护'],
            correct: 1,
            category: 'shebei',
            explanation: '隔离开关主要用于隔离电源，保证检修安全，不能切断负荷电流。'
        },
        {
            question: '绝缘子的作用是：',
            options: ['导电', '支撑导体并绝缘', '散热', '灭弧'],
            correct: 1,
            category: 'shebei',
            explanation: '绝缘子用于支撑和悬挂导体，并使导体与接地部分绝缘。'
        },
        {
            question: '互感器的作用是：',
            options: ['变换电压或电流', '储存电能', '产生电能', '调节频率'],
            correct: 0,
            category: 'shebei',
            explanation: '互感器分为电压互感器和电流互感器，用于将高电压、大电流变换为标准的低电压、小电流。'
        },
        {
            question: '避雷器与被保护设备的连接方式是：',
            options: ['串联', '并联', '混联', '都可以'],
            correct: 1,
            category: 'shebei',
            explanation: '避雷器与被保护设备并联连接，当过电压发生时，避雷器动作，将过电压限制在设备允许范围内。'
        }
    ];
}
