<template>
    <form class="contact_page_form" action="?" method="POST">
            <label class="select_type_label" for="typeContact">Seu contato é relacionado a:</label>
            <select v-model="selected" class="select_type" id="typeContact" name="typeContact">
                <option value="imprensa">Imprensa</option>
                <option value="divulgacao">Divulgação</option>
                <option value="parceria">Parceria</option>
            </select>


            <input class="input_name" type="text" id="name" name="name" placeholder="Nome" required>

            
            <input class="input_company" type="text" id="company" name="company" placeholder="Empresa" required>

            
            <input class="input_email" type="email" id="email" name="email" placeholder="E-mail" required>

            
            <input class="input_telephone" type="number" id="telephone" name="telephone" placeholder="Telefone" required>
          

            <label class="label_subject" for="subject">Mensagem</label>
            <textarea class="textarea_subject" id="subject" name="subject" placeholder="Digite aqui.." required></textarea>

            <div class="form_submit">
                <div class="g-recaptcha" data-sitekey="6Ldhpl4gAAAAADLupRB5P0G3Ouc4gRN0up7tjRb5"></div> 
                <button type="submit" class="form_btn_submit">Enviar</button>
            </div>
                
        </form>
</template>

<script>
export default {
    name: "ContactForm",
    data(){
        return{
            selected: null,
        }
    },
}
</script>

<style scoped>
.contact_page_form{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    position: relative;
}
label{
    color: var(--primary-color);
    font-weight: var(--font-light);
    font-size: var(--font-sizeP);
}
:focus{
    outline: none;
}
input{
    border: 0; 
    padding: 4px 0; 
    border-bottom: 1px solid #ccc; 
    background-color: transparent;
    padding-top: 40px;
}
input::placeholder{
    font-family: "Poppins", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: var(--font-light);
}
.select_type{
    font-family: "Poppins", Helvetica, Arial, sans-serif;
    padding: 15px;
    border-color: var(--terciary-color);
    appearance: none; 
    position: relative;
    border-radius: 10px;
}

.contact_page_form::after{
    content: '';
    position: absolute;
    width: 17px;
    height: 10px;
    background: url("@/assets/setaDropDown.svg") no-repeat;
    right: 30px;
    top: 45px;
}


.label_subject{
    padding-top: 30px;      
}

.input_telephone::-webkit-outer-spin-button,
.input_telephone::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}

input[type=number]{
    -moz-appearance: textfield;
}

.textarea_subject{
    border-color: var(--terciary-color);
    resize: none;
    padding: 10px;
    height: 100px;
}

.form_submit{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
}

.form_btn_submit{
    border-radius: 5px;
    border: none;
    padding: 10px 60px;
    cursor: pointer;
    background-color: var(--secundary-color);
    color: var(--background-color);
    font-size: var(--font-sizeM);
    transition: 0.3s;
    font-family: inherit;
    position: relative;
}

.form_btn_submit:hover{
    transform: scale(1.1);
}

.form_btn_submit::after{
    content: '';
    position: absolute;
    width: 21px;
    height: 18px;
    background: url("@/assets/icon-enviar.svg") no-repeat;
    top: 16px;
    right: 15px;
}

/* .form_submit_not_robot{
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 0.875rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 10px 30px;
    background-color: #F5F5F5;
    border-radius: 5px; 
}

.form_submit_not_robot input{
    opacity: 1;
    cursor: pointer;
    height: 20px;
    width: 20px;
} */








</style>