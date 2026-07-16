

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let isSubmitted = false;

// 初始化答题
function initQuiz() {
    const subject = localStorage.getItem('quizSubject') || 'mixed';
    const count = parseInt(localStorage.getItem('quizCount')) || 10;
    const ordered = localStorage.getItem('quizOrder') === 'true';
    
    currentQuestions = getQuestions(subject, count, ordered);
    currentIndex = 0;
    score = 0;
    
    updateProgress();
    displayQuestion();
}

// 更新进度显示
function updateProgress() {
    document.getElementById('current-num').textContent = currentIndex + 1;
    document.getElementById('total-num').textContent = currentQuestions.length;
    document.getElementById('score').textContent = '得分：' + score;
}

// 显示题目
function displayQuestion() {
    if (currentIndex >= currentQuestions.length) {
        showResult();
        return;
    }
    
    const question = currentQuestions[currentIndex];
    selectedAnswer = null;
    isSubmitted = false;
    
    document.getElementById('question-num').textContent = currentIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-category').textContent = subjectNames[question.category];
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.index = index;
        
        const letters = ['A', 'B', 'C', 'D'];
        optionElement.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
}

// 选择选项
function selectOption(index) {
    if (isSubmitted) return;
    
    // 取消其他选项的选中状态
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 选中当前选项
    const selectedElement = document.querySelector(`.option[data-index="${index}"]`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
        selectedAnswer = index;
    }
}

// 提交答案
function submitAnswer() {
    if (selectedAnswer === null) {
        alert('请选择一个答案！');
        return;
    }
    
    isSubmitted = true;
    const question = currentQuestions[currentIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    // 显示正确/错误状态
    document.querySelectorAll('.option').forEach((opt, index) => {
        opt.classList.remove('selected');
        opt.style.pointerEvents = 'none';
        
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // 更新分数
    if (isCorrect) {
        score++;
        document.getElementById('score').textContent = '得分：' + score;
    }
    
    // 显示解析
    if (!isCorrect && question.explanation) {
        document.getElementById('feedback-content').textContent = question.explanation;
        document.getElementById('feedback').style.display = 'block';
    }
    
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

// 下一题
function nextQuestion() {
    currentIndex++;
    updateProgress();
    displayQuestion();
}

// 显示结果
function showResult() {
    const container = document.querySelector('.quiz-container');
    container.innerHTML = `
        <div class="result-container">
            <h2 class="result-title">答题完成！</h2>
            <div class="result-score">${score} / ${currentQuestions.length}</div>
            <div class="result-text">正确率：${Math.round((score / currentQuestions.length) * 100)}%</div>
            <div class="result-actions">
                <button onclick="window.location.href='index.html'">返回首页</button>
                <button onclick="initQuiz()">再做一次</button>
            </div>
        </div>
    `;
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    
    document.getElementById('submit-btn')?.addEventListener('click', submitAnswer);
    document.getElementById('next-btn')?.addEventListener('click', nextQuestion);
    document.getElementById('back-btn')?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
