const kidsComment = dc.id("kids_comments");
if (kidsComment) {
    let registerForm = kidsComment.query('form');
    let commentBox = registerForm.query('textarea');

    registerForm.onsubmit = e => {
        e.preventDefault();

        console.log("comment to be saved: ", commentBox.value)
        commentBox.value = '';
    }

    //reply button event
    let replys = kidsComment.queries('.comment button');

    replys.forEach(button => {
        button.onclick = () => {
            alert('reply')
        }
    });
}