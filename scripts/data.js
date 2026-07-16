// 已移除所有 import 语句，依赖全局加载的科目题库函数
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

const allQuestions = {
    dianlu: loadDianluQuestions(),
    dianji: loadDianjiQuestions(),
    dianli: loadDianliQuestions(),
    gaodianya: loadGaodianyaQuestions(),
    jidian: loadJidianQuestions(),
    xitong: loadXitongQuestions(),
    shebei: loadShebeiQuestions(),
    nengli: loadNengliQuestions()
};

function getQuestions(subject, count, ordered) {
    let questions = [];
    
    if (subject === 'mixed') {
        const subjects = Object.keys(subjectNames);
        const perSubject = Math.ceil(count / subjects.length);
        
        subjects.forEach(sub => {
            const subjectQuestions = [...allQuestions[sub]];
            if (!ordered) {
                subjectQuestions.sort(() => Math.random() - 0.5);
            }
            questions = questions.concat(subjectQuestions.slice(0, perSubject));
        });
        
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

window.subjectNames = subjectNames;
window.allQuestions = allQuestions;
window.getQuestions = getQuestions;
