import { loadDianluQuestions } from '../data/dianlu.js';
import { loadDianjiQuestions } from '../data/dianji.js';
import { loadDianliQuestions } from '../data/dianli.js';
import { loadGaodianyaQuestions } from '../data/gaodianya.js';
import { loadJidianQuestions } from '../data/jidian.js';
import { loadXitongQuestions } from '../data/xitong.js';
import { loadShebeiQuestions } from '../data/shebei.js';
import { loadNengliQuestions } from '../data/nengli.js';

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

export { subjectNames, allQuestions, getQuestions };
