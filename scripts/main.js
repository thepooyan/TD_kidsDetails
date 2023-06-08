const kidsComment = dc.id("kids_comments");
if (kidsComment) {
    let registerForm = kidsComment.query('form');
    registerForm.onsubmit = e => {
        e.preventDefault();
        alert('register')
    }

    //reply button event
    let replys = kidsComment.queries('.comment button');

    replys.forEach(button => {
        button.onclick = () => {
            alert('reply')
        }
    });
}