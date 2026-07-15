function loadDianjiQuestions() {
    return [
        {
            question: '异步电动机的转子转速：',
            options: ['等于同步转速', '大于同步转速', '小于同步转速', '可以任意调节'],
            correct: 2,
            category: 'dianji',
            explanation: '异步电动机的转子转速始终小于同步转速，存在转差率。'
        },
        {
            question: '直流电机的换向器作用是：',
            options: ['改变电枢电流方向', '改变励磁电流方向', '调节转速', '保护电机'],
            correct: 0,
            category: 'dianji',
            explanation: '换向器的作用是在电刷位置将电枢绕组中的交流电转换为直流电。'
        },
        {
            question: '同步发电机的转速与频率的关系是：',
            options: ['n = 60f/p', 'n = 60p/f', 'n = fp/60', 'n = f/60p'],
            correct: 0,
            category: 'dianji',
            explanation: '同步转速公式：n = 60f/p，其中f为频率，p为极对数。'
        },
        {
            question: '变压器的变比等于：',
            options: ['原副边电压之比', '原副边电流之比', '原副边匝数之比', 'A和C都对'],
            correct: 3,
            category: 'dianji',
            explanation: '变压器变比k = N1/N2 = U1/U2 = I2/I1'
        },
        {
            question: '异步电机启动时，启动电流：',
            options: ['很小', '等于额定电流', '是额定电流的4-7倍', '是额定电流的10倍以上'],
            correct: 2,
            category: 'dianji',
            explanation: '异步电机直接启动时，启动电流通常为额定电流的4-7倍。'
        }
    ];
}
