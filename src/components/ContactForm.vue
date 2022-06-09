<template>
    <form class="contact_page_form">
            <label for="typeContact">Seu contato é relacionado a:</label>
            <select class="select_type" id="typeContact" name="typeContact">
                <option value="imprensa">Imprensa</option>
                <option value="divulgacao">Divulgação</option>
                <option value="parceria">Parceria</option>
            </select>


            <input class="input_name" type="text" id="name" name="name" placeholder="Nome" required>

            
            <input class="input_company" type="text" id="company" name="company" placeholder="Empresa" required>

            
            <input class="input_email" type="email" id="email" name="email" placeholder="E-mail" required>

            
            <input class="input_telephone" type="number" id="telephone" name="telephone" placeholder="Telefone" required>
          

            <label class="label_subject" for="subject">Mensagem</label>
            <textarea class="textarea_subject" id="subject" name="subject" placeholder="Digite aqui.." style="height:100px; width: 300px" required></textarea>

            <div class="form_submit">
                <div class="form_submit_not_robot">
                    <p>Não sou um robô</p>
                </div>
                <button class="form_btn_submit">Enviar</button>
            </div>
                
        </form>
</template>

<script>
export default {

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
    padding: 15px;
    outline-color: var(--terciary-color);
    appearance: none; 
    position: relative;
}

.select_type::before{
    content: 'asaassasa';
    position: absolute;
    background-color: red;
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
    outline-color: var(--terciary-color);
    resize: none;
    padding: 10px;
}





</style>