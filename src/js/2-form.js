const FORM_STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

const formData = {
    email: "",
    message: ""
};
saveForm();

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
});

function saveForm() {
    const storData = localStorage.getItem(FORM_STORAGE_KEY);
    
    if (storData) {
        try {
            const curData = JSON.parse(storData);

            formData.email = curData.email || "";
            formData.message = curData.message || "";

            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;

        } catch (error) {
            console.error('Wrong parse data from Local Store', error);
        }
    };
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    
    console.log(formData);

    localStorage.removeItem(FORM_STORAGE_KEY);
    formData.email = "";
    formData.message = "";

    e.target.reset();
    
});


