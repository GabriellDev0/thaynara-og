<template>
    <form class="contact_page_form" ref="form" @submit.prevent="sendEmail">


            <label class="contact_type_label" for="contact_type">Seu contato é relacionado a:</label>
            <select class="contact_type" name="contact_type" v-model="form.contact_type">
                <option value="imprensa">Imprensa</option>
                <option value="divulgacao">Divulgação</option>
                <option value="parceria">Parceria</option>
            </select>


            <input class="input_name" type="text" id="name" name="name" v-model="form.name" placeholder="Nome" required>

            
            <input class="input_company" type="text" id="company" name="company" v-model="form.company" placeholder="Empresa" required>

            
            <input class="input_email" type="email" id="email" name="email" v-model="form.email" placeholder="E-mail" required>

            
            <input class="input_telephone" type="number" id="telephone" name="telephone" v-model="form.telephone"  placeholder="Telefone" required>
          

            <label class="label_message" for="message">Mensagem</label>
            <textarea class="textarea_message" id="message" name="message" v-model="form.message" placeholder="Digite aqui.." required></textarea>

            <div class="form_submit">
                <vueRecaptcha
                    v-show="showRecaptcha" 
                    sitekey="6Ldhpl4gAAAAADLupRB5P0G3Ouc4gRN0up7tjRb5"
                    size="normal"
                    theme="light"
                    :load-recaptcha-script="true" 
                    @verify="recaptchaVerified"
                    @expire="recaptchaExpired" 
                    @error="recaptchaFailed"
                    ref="vueRecaptcha">
                </vueRecaptcha> 
                <!-- <div class="g-recaptcha" data-callback="" data-sitekey="6Ldhpl4gAAAAADLupRB5P0G3Ouc4gRN0up7tjRb5"></div>  -->
                <button id="submit" type="submit" :disabled='isDisabled' class="form_btn_submit">Enviar</button>
            </div>
            
        </form>
</template>

<script>
import vueRecaptcha from 'vue3-recaptcha2';
import emailjs from '@emailjs/browser';
import { db } from "../firebase/index"
import { addDoc, collection } from "firebase/firestore";


export default {
    name: "ContactForm",
    components:{
        vueRecaptcha,
    },
    data(){
        return{
            showRecaptcha: true, // Recaptcha
            isDisabled: false, // Button
            //FormInputs
            form:{
                contact_type: null,
                name: null,
                company: null,
                email: null,
                telephone: null,
                message: null
            },  
        }
    },
    methods:{
        recaptchaVerified(response){
            if(response.length == 0){
                console.log('Erro')
            }else{
                this.isDisabled = false;
            }
        },
        recaptchaExpired(){
            this.$refs.vueRecaptcha.reset();
            this.isDisabled = true;
        },
        recaptchaFailed(){
            this.isDisabled = true;
        },
        sendEmail() {
            emailjs.sendForm('gmailMessage', 'template_2op1aeg', this.$refs.form, 'xNtG_SbKBGU8Rc89D')
                .then(() => {
                    window.alert('Formulário Enviado com Sucesso !!')
                    this.addFormToFirebase()
                    for(let item in this.form){
                    this.form[item] = null //reseta os campos do form
                     }
                }, () => {
                    window.alert('Ops..Ocorreu um erro ao enviar o formulário, tente novamente.')
                });
                
                this.$refs.form.reset(); //limpa os campos visualmente
        },
       async addFormToFirebase(){
            await addDoc(collection(db,'thaynara-form'),{...this.form});
        }
    }
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
.contact_type{
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


.label_message{
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

.textarea_message{
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
    transition: all 0.3s;
    font-family: inherit;
    position: relative;
}

.form_btn_submit:hover{
    transform: scale(1.1);
}
.form_btn_submit:disabled{
    opacity: 0.5;
    background-color: var(--terciary-color);
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

</style>