loginForm.onSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/login`, {
        method: 'POST',
        body: new FormData(loginForm),
    })
        .then((response) => {
            window.location.href = '/main.html';
        })
        .catch(error);
    {
        throw error;
    }
};

const response = async (e) => {
    await fetch('/login', {
        method: 'POST',
        body: new FormData(e.target),
    })
        .then((response) => {
            if (response.status === 201) {
                window.location.href = '/main.html';
                alert('로그인에 성공했습니다.');
            } else {
                console.error('로그인 에러');
                return;
            }
        })
        .catch((error) => {
            alert('로그인에 실패하였습니다.');
            throw new error();
        });
};
