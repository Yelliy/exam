// 题目数据管理
const subjectNames = {
    dianlu: '电路原理',
    dianji: '电机学',
    dianli: '电力电子技术',
    gaodianya: '高电压技术',
    jidian: '继电保护',
    xitong: '电力系统分析',
    shebei: '电气设备(发电厂)',
    nengli: '一般能力'
};

// 所有题目数据
const allQuestions = {
    dianlu: [
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
    ],
    dianji: [
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
    ],
    dianli: [
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
    ],
    gaodianya: [
        {
            question: '绝缘材料的击穿电压是指：',
            options: ['材料开始导电的电压', '材料发生电击穿时的电压', '材料的额定电压', '材料的工作电压'],
            correct: 1,
            category: 'gaodianya',
            explanation: '击穿电压是指绝缘材料发生电击穿时的临界电压。'
        },
        {
            question: '避雷器的主要作用是：',
            options: ['限制过电压', '限制短路电流', '提高功率因数', '滤波'],
            correct: 0,
            category: 'gaodianya',
            explanation: '避雷器用于限制雷电过电压和操作过电压，保护电气设备。'
        },
        {
            question: '以下哪种不是气体放电形式：',
            options: ['电晕放电', '火花放电', '电弧放电', '光电效应'],
            correct: 3,
            category: 'gaodianya',
            explanation: '光电效应是光照射金属表面产生电子发射的现象，不属于气体放电形式。'
        },
        {
            question: 'SF6气体的特点是：',
            options: ['有毒', '灭弧能力强', '不可压缩', '易燃'],
            correct: 1,
            category: 'gaodianya',
            explanation: 'SF6气体具有优异的绝缘和灭弧性能，是常用的高压开关灭弧介质。'
        },
        {
            question: '工频耐压试验的目的是：',
            options: ['检验绝缘的耐电强度', '测量绝缘电阻', '测量介质损耗', '检查设备外观'],
            correct: 0,
            category: 'gaodianya',
            explanation: '工频耐压试验用于检验电气设备绝缘在工频电压下的耐电强度。'
        }
    ],
    jidian: [
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
    ],
    xitong: [
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
    ],
    shebei: [
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
    ],
    nengli: [
        {
            question: '以下哪个是团队协作的核心要素：',
            options: ['个人英雄主义', '有效沟通', '独断专行', '互相猜忌'],
            correct: 1,
            category: 'nengli',
            explanation: '有效沟通是团队协作的核心，能够促进信息共享和协同工作。'
        },
        {
            question: '时间管理的四象限法则中，应该优先处理：',
            options: ['紧急不重要', '重要不紧急', '紧急重要', '不紧急不重要'],
            correct: 2,
            category: 'nengli',
            explanation: '四象限法则中，第一象限（紧急重要）的事情应该优先处理。'
        },
        {
            question: '下列哪个不是有效的问题解决步骤：',
            options: ['定义问题', '分析原因', '直接行动', '评估结果'],
            correct: 2,
            category: 'nengli',
            explanation: '有效的问题解决步骤包括：定义问题、分析原因、制定方案、实施方案、评估结果。直接行动缺少分析环节。'
        },
        {
            question: 'SWOT分析中的S代表：',
            options: ['优势', '劣势', '机会', '威胁'],
            correct: 0,
            category: 'nengli',
            explanation: 'SWOT分析：S(Strengths)优势、W(Weaknesses)劣势、O(Opportunities)机会、T(Threats)威胁。'
        },
        {
            question: '沟通的基本要素不包括：',
            options: ['发送者', '接收者', '信息', '设备'],
            correct: 3,
            category: 'nengli',
            explanation: '沟通的基本要素包括：发送者、接收者、信息、渠道、反馈、环境等，设备不是基本要素。'
        }
    ]
};

// 获取题目列表
function getQuestions(subject, count, ordered) {
    let questions = [];
    
    if (subject === 'mixed') {
        // 混合模式：每个科目取一些题目
        const subjects = Object.keys(subjectNames);
        const perSubject = Math.ceil(count / subjects.length);
        
        subjects.forEach(sub => {
            const subjectQuestions = [...allQuestions[sub]];
            if (!ordered) {
                subjectQuestions.sort(() => Math.random() - 0.5);
            }
            questions = questions.concat(subjectQuestions.slice(0, perSubject));
        });
        
        // 打乱顺序并截取
        if (!ordered) {
            questions.sort(() => Math.random() - 0.5);
        }
        questions = questions.slice(0, count);
    } else {
        questions = [...allQuestions[subject]];
        if (!ordered) {
            questions.sort(() => Math.random() - 0.5);
        }
        questions = questions.slice(0, count);
    }
    
    return questions;
}
