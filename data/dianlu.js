function loadDianluQuestions() {
    return [
        {
            question: '在直流电路中，电容元件相当于：',
            options: ['短路', '开路', '电阻', '电源'],
            correct: 1,
            category: 'dianlu',
            explanation: '电容元件在直流稳态电路中相当于开路，因为电容充电完成后电流为零。'
        },
        {
            question: '基尔霍夫电流定律（KCL）指出：',
            options: [
                '在任一时刻，流入节点的电流之和等于流出节点的电流之和',
                '在任一时刻，沿闭合回路的电压降之和等于电动势之和',
                '电阻两端的电压与电流成正比',
                '电感两端的电压与电流的变化率成正比'
            ],
            correct: 0,
            category: 'dianlu',
            explanation: 'KCL定律：在任一时刻，对电路中的任一节点，流入节点的电流之和等于流出节点的电流之和。'
        },
        {
            question: '两个电阻串联，R1=4Ω，R2=6Ω，总电阻为：',
            options: ['2Ω', '10Ω', '24Ω', '1.5Ω'],
            correct: 1,
            category: 'dianlu',
            explanation: '串联电阻的总电阻等于各电阻之和：R = R1 + R2 = 4 + 6 = 10Ω'
        },
        {
            question: '正弦交流电路中，电感元件的阻抗与频率的关系是：',
            options: ['无关', '成正比', '成反比', '平方关系'],
            correct: 1,
            category: 'dianlu',
            explanation: '感抗XL = 2πfL，与频率f成正比。'
        },
        {
            question: '星形连接的三相电路中，线电压与相电压的关系是：',
            options: ['线电压等于相电压', '线电压是相电压的√3倍', '线电压是相电压的1/√3倍', '线电压是相电压的3倍'],
            correct: 1,
            category: 'dianlu',
            explanation: '星形连接中，线电压 = √3 × 相电压，相位超前30°。'
        }
    ];
}
