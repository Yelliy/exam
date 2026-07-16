function loadDianjiQuestions() {
    return [
        // 单选题1
        {
            question: '关于电机的磁路和磁通，说法不正确的是（）',
            options: [
                '主磁路为非线性磁路',
                '漏磁路主要由非铁磁材料构成',
                '漏磁路磁阻远大于主磁路磁阻',
                '漏磁路易饱和'
            ],
            correct: 2,
            category: 'dianji',
            explanation: '选项C描述错误，正确的说法是漏磁路磁阻远大于主磁路磁阻。漏磁通经过空气隙等非铁磁材料，磁阻很大。'
        },
        // 单选题2
        {
            question: '变压器负载运行时，建立主磁通的电流是（）',
            options: ['负载电流', '铁耗电流', '励磁电流', '一次侧电流'],
            correct: 2,
            category: 'dianji',
            explanation: '励磁电流是建立主磁通的电流，负载电流产生的磁通大部分被副边电流的磁通抵消。'
        },
        // 单选题3
        {
            question: '一台Yd联接的变压器，容量220kVA，电压为110/11kV，二次侧的额定电流为（）',
            options: ['20A', '34.64A', '11.55A', '6.67A'],
            correct: 2,
            category: 'dianji',
            explanation: '根据公式I = S/(√3×U) = 220000/(1.732×11000) ≈ 11.55A'
        },
        // 单选题4
        {
            question: '变压器一次侧接电源，二次侧带负载，与励磁电抗大小无关的物理量是（）',
            options: ['铁心截面积', '电源频率', '铁心磁导率', '二次侧绕组匝数'],
            correct: 3,
            category: 'dianji',
            explanation: '励磁电抗与铁芯材料、铁芯截面积、绕组匝数和电源频率有关，与二次侧绕组匝数无关。'
        },
        // 单选题5
        {
            question: '三相变压器的变比定义为（）之比',
            options: [
                '一、二次侧相电动势',
                '一、二次侧线电动势',
                '一、二次侧相电压',
                '一、二次侧线电压'
            ],
            correct: 0,
            category: 'dianji',
            explanation: '三相变压器的变比定义为一、二次侧相电动势（或相电压）之比。'
        },
        // 单选题6
        {
            question: '一台变压器额定空载运行时，外加电压频率降低，其他条件不变，则铁心损耗和空载电流将（）',
            options: ['增加、增加', '减小、减少', '增加、减少', '减少、增加'],
            correct: 0,
            category: 'dianji',
            explanation: '频率降低使磁通密度增加，导致铁耗和励磁电流都增加。'
        },
        // 单选题7
        {
            question: '关于互感器说法正确的有（）',
            options: [
                '电流互感器一次侧与电网并联',
                '电压互感器二次侧不允许开路',
                '电压互感器二次侧绕组的一个端子需接地',
                '电流互感器相当于空载运行的变压器'
            ],
            correct: 2,
            category: 'dianji',
            explanation: '电压互感器二次侧一端接地是安全要求。电流互感器应串联，电压互感器二次侧不允许短路。'
        },
        // 单选题8
        {
            question: '关于变压器空载实验，说法正确的是（）',
            options: [
                '变压器空载实验可以求得励磁电抗',
                '在一次侧做测得的空载损耗P0主要是铜耗',
                '变压器空载实验一般在高压侧进行',
                '变压器空载实验测得的损耗主要是铜耗'
            ],
            correct: 0,
            category: 'dianji',
            explanation: '空载实验可测得励磁阻抗。空载损耗主要是铁耗，实验一般在低压侧进行。'
        },
        // 单选题9
        {
            question: '自耦变压器的电磁容量和它的额定容量的关系是（）',
            options: ['相等', '额定容量小于电磁容量', '电磁容量小于额定容量', '视情况而定'],
            correct: 2,
            category: 'dianji',
            explanation: '自耦变压器有部分功率通过传导直接传递，电磁容量小于额定容量。'
        },
        // 多选题（转为单选）
        {
            question: '变压器的效率与以下哪些因素有关？',
            options: [
                '仅与负载性质有关',
                '与负载性质、负载大小都有关',
                '仅与负载电抗有关',
                '与负载系数无关'
            ],
            correct: 1,
            category: 'dianji',
            explanation: '变压器效率与负载性质（功率因数）、负载大小、负载系数等都有关。'
        },
        // 多选题
        {
            question: '三相变压器绕组为三角形连接时，下列说法正确的是（）',
            options: [
                '相电压不等于线电压',
                '线电压等于相电压乘以√3',
                '相电流不等于线电流',
                '线电流等于相电流'
            ],
            correct: 2,
            category: 'dianji',
            explanation: '三角形连接中，线电压等于相电压，线电流等于相电流乘以√3。'
        },
        // 多选题
        {
            question: '油浸式变压器中的油的作用不包括（）',
            options: ['绝缘', '散热', '保护变压器', '润滑'],
            correct: 3,
            category: 'dianji',
            explanation: '变压器油的作用是绝缘、散热和保护，不用于润滑。'
        },
        // 判断题1
        {
            question: '单相变压器一次侧加电压，就有铁耗。',
            options: ['正确', '错误'],
            correct: 0,
            category: 'dianji',
            explanation: '只要加电压就会产生磁通，从而产生铁耗（涡流损耗和磁滞损耗）。'
        },
        // 判断题2
        {
            question: '变压器额定运行时效率最大。',
            options: ['正确', '错误'],
            correct: 1,
            category: 'dianji',
            explanation: '变压器效率最大发生在铜耗等于铁耗的时候，通常在额定负载的50%-70%左右。'
        },
        // 判断题3
        {
            question: '变压器铭牌中的额定容量一般指变压器的有功功率。',
            options: ['正确', '错误'],
            correct: 1,
            category: 'dianji',
            explanation: '额定容量是视在功率（kVA），不是有功功率（kW）。'
        },
        // 判断题4
        {
            question: '变压器空载合闸过程产生的励磁涌流，一般对变压器的直接危害不大。',
            options: ['正确', '错误'],
            correct: 0,
            category: 'dianji',
            explanation: '励磁涌流虽然很大，但持续时间短，且现代变压器设计考虑了这种冲击。'
        }
    ];
}
