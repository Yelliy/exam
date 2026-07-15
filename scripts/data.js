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

// 题目数据存储
let allQuestions = {};

// 加载各科目的题目数据
function loadQuestions() {
    // 这里会自动加载 data/ 文件夹下的题目文件
    // 如果是静态HTML，我们直接在这里定义题目数据
    allQuestions = {
        dianlu: loadDianluQuestions(),
        dianji: loadDianjiQuestions(),
        dianli: loadDianliQuestions(),
        gaodianya: loadGaodianyaQuestions(),
        jidian: loadJidianQuestions(),
        xitong: loadXitongQuestions(),
        shebei: loadShebeiQuestions(),
        nengli: loadNengliQuestions()
    };
}

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

// 初始化加载
loadQuestions();
