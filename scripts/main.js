const kidsComment = dc.id("kids_comments");
if (kidsComment) {
    let registerForm = kidsComment.query('form');
    let commentBox = registerForm.query('textarea');

    commentBox.onkeydown = () => {
        commentBox.classList.remove('error');
    }

    //submit new comment
    function submitComment(commentBox, e) {
        e.preventDefault();

        if (!commentBox.value) {
            callModal.fail('لطفا نظر خود را وارد کنید');
            commentBox.classList.add('error');
            return
        }

        console.log("comment to be saved: ", commentBox.value);
        callModal.success('نظر شما با موفقیت ثبت شد و پس از بازرسی ادمین نمایش داده میشود').then(() => {
            commentBox.value = '';
        })

    }
    registerForm.onsubmit = e => {
        submitComment(commentBox, e);
    }

    //reply button event
    let replys = kidsComment.queries('.comment button');

    replys.forEach(button => {
        button.onclick = () => {
            let clone = registerForm.cloneNode(true);
            clone.classList.add("kids_comments_form");
            let _textarea = clone.querySelector('textarea');
            _textarea.classList.remove('error');
            _textarea.placeholder = 'ثبت پاسخ...';
            clone.querySelector('p').innerText = 'پاسخ خود را ثبت کنید';
            clone.querySelector('button').innerText = 'ثبت پاسخ';

            clone.onsubmit = e => {
                submitComment(_textarea, e);
            }

            callModal(clone);
        }
    });
}

const sampleProject = dc.query('#kidsCourseDetail .smapleProject');
if (sampleProject) {
    const projectItems = sampleProject.query('.smapleProject > .content')
    //turn sample project into carousel if smaller than 480
    if (window.innerWidth < 480) {
        projectItems.classList.add('owl-carousel');
        $(projectItems).owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            rtl: true,
            items: 1.5,
        });
    }
}