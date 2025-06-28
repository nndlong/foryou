document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPassword = "8325";
    const errorMessage = document.getElementById('errorMessage');
    
    if (password === correctPassword) {
        window.location.href = "success.html"; // Chuyển sang trang thành công
    } else {
        errorMessage.textContent = "Không đúng rồi, đừng có ý định ăn gian nhé tình yêu";
    }
});
