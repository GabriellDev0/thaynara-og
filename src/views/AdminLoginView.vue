<template>
        <section class="vh-100">
            <div class="container-fluid">
                <div class="row">
                <div class="col-sm-6 text-black">

                    <div class="px-5 ms-xl-4">
                    <i style="color: #FF8585" class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
                    <span style="color: #FF8585" class="h1 fw-bold mb-0">Thaynara OG</span>
                    </div>

                    <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                    <form style="width: 23rem;">

                        <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

                        <div class="form-outline mb-4">
                        <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="login_form.email" required />
                        <label class="form-label" for="form2Example18">Email address</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="password" id="form2Example28" class="form-control form-control-lg" v-model="login_form.password" required />
                        <label class="form-label" for="form2Example28">Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                        <button class="btn btn-info btn-lg btn-block" type="button" @click.prevent="login">Login</button>
                        </div>

                    </form>

                    </div>

                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="@/assets/contato-foto.jpg"
                    alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
                </div>
                </div>
            </div>
            </section>
</template>

<script>
import  store  from "../store"

export default {
    name: "AdminLoginView",
    data(){
        return{
            login_form:{
                email: "",
                password: ""
            }  
        }
    },
    methods:{
         login(){
            store.dispatch('login', this.login_form)
        }
    },
}
</script>

<style scoped>
    .bg-image-vertical {
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: right center;
        background-size: auto 100%;
    }

    @media (min-width: 1025px) {
    .h-custom-2 {
    height: 100%;
    }
}
</style>