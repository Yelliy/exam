// 导入各科目题目
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
    // ... 其他科目
};

const allQuestions = {
    dianlu: loadDianluQuestions(),
    dianji: loadDianjiQuestions(),
    // ... 其他科目
};

export { subjectNames, allQuestions, getQuestions };
