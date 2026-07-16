export function loadDianliQuestions() {
    return [
        {
            question: '晶闸管（SCR）导通的条件是：',
            options: ['阳极加正电压', '门极加触发脉冲', '阳极加正电压且门极加触发脉冲', '阴极加正电压'],
            correct: 2,
            category: 'dianli',
            explanation: '晶闸管导通需要两个条件：阳极加正向电压，门极加适当的触发脉冲。'
        },
        {
            question: '三相桥式整流电路中，晶闸管的导通角是：',
            options: ['60°', '90°', '120°', '180°'],
            correct: 2,
            category: 'dianli',
            explanation: '三相桥式整流电路中，每个晶闸管导通120°。'
        },
        {
            question: 'IGBT是：',
            options: ['绝缘栅双极晶体管', '电力场效应管', '晶闸管', '二极管'],
            correct: 0,
            category: 'dianli',
            explanation: 'IGBT = Insulated Gate Bipolar Transistor，绝缘栅双极晶体管。'
        },
        {
            question: 'PWM调制的主要目的是：',
            options: ['提高电压', '降低电流', '实现变频变压', '保护电路'],
            correct: 2,
            category: 'dianli',
            explanation: 'PWM（脉冲宽度调制）通过改变脉冲宽度来实现变频变压控制。'
        },
        {
            question: '逆变电路的作用是：',
            options: ['直流变交流', '交流变直流', '交流变交流', '直流变直流'],
            correct: 0,
            category: 'dianli',
            explanation: '逆变器的作用是将直流电转换为交流电。'
        }
    ];
}
