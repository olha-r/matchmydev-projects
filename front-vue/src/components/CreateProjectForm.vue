<script>
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minLength, minValue} from '@vuelidate/validators'
export default {
    setup(){
        return{
            v$:useVuelidate()
        }
    },
    data() {
        return {
            newProject: {
                name: '',
                code: '',
                description: '',
                startDate: '',
                endDate: '',
                production: false
            }
        }
    },
    validations(){
        return{
            newProject:{
                name:{
                    required,
                    minLength: minLength(1),
                    maxLength: maxLength(150)
                },
                code:{
                    required,
                    minLength: minLength(1),
                    maxLength: maxLength(20)
                },
                description:{
                    required,
                    minLength: minLength(1),
                    maxLength: maxLength(1000)
                },
                startDate:{
                    required
                },
                endDate:{
                    minValue: () => {
                    const start = this.newProject.startDate;
                    const end = this.newProject.endDate;
                    if (start !== null && start != '' && end != null && end != '') {
                        const startDate = new Date(start);
                        const endDate = new Date(end);
                        const valid = endDate > startDate;
                        return valid;
                    }
                    return true;
}
                },
                production:{
                    required
                }

            }

        }
    },
    methods: {
        async createNewProject() {
            if(await this.v$.$validate()){
                await this.$axios.post("/projects",
                this.newProject)
                .then((response) => {
                    console.log(response);
                    Object.assign(this.$data.newProject, this.$options.data().newProject),
                    this.v$.$reset();
                    const toast = bootstrap.Toast.getOrCreateInstance('#toastSuccess', {
                            delay: 2500
                        });
                    toast.show()
                })
            } 
        }
    }
}
</script>

<template>
    <main class="container-xl mt-5 pt-5">
        <h1>Create a project</h1>
        <div class="row justify-content-center align-items-center">
            <form @submit.prevent="createNewProject">
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="name" class="form-label required">Name</label>
                        <input v-model="newProject.name" name="name" id="name" type="text" :class="{'is-invalid' : v$.newProject.name.$error}"
                            class="form-control focus-grey" aria-describedby="nameHelp">
                        <div id="nameHelp"  class="form-text">Text with a maximum of 150 chars. Must be unique.</div>
                        <div class="invalid-feedback">Required field</div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="code" class="form-label required">Code</label>
                        <input v-model="newProject.code" name="code" id="code" type="text" :class="{'is-invalid' : v$.newProject.code.$error}"
                            class="form-control focus-grey" aria-describedby="codeHelp">
                        <div id="codeHelp" class="form-text">Text with a maximum of 20 chars. Must be unique.</div>
                        <div class="invalid-feedback">Required field</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label required">Description</label>
                    <textarea v-model="newProject.description" name="description" id="description" :class="{'is-invalid' : v$.newProject.description.$error}"
                        class="form-control focus-grey" rows="10"></textarea>
                    <div id="descriptionHelp" class="form-text">Text with maximum of 1000 chars.</div>
                    <div class="invalid-feedback">Required field</div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="startDate" class="form-label required">Start date</label>
                        <input v-model="newProject.startDate" name="startDate" type="date" id="startDate" :class="{'is-invalid' : v$.newProject.startDate.$error}"
                            class="form-control my-2 focus-grey" />
                        <div class="invalid-feedback">Required field</div>
                    </div>
                    <div class="col-md-6">
                        <label for="endDate" class="form-label">End date</label>
                        <input v-model="newProject.endDate" name="endDate" type="date" id="endDate" :class="{'is-invalid' : v$.newProject.endDate.$error}"
                            class="form-control my-2 focus-grey" />
                        <div id="endDateHelp" class="form-text">If set, must be after start date and less than or equal
                            today.</div>
                        <div class="invalid-feedback">Must be after start date.</div>
                    </div>
                </div>
                <div class="form-check form-switch mb-3">
                    <div class="row">
                        <label for="production" class="form-label status required">In production?</label>
                        <div class="col mx-5">
                            <input v-model="newProject.production" name="production" type="checkbox" id="production" :class="{'is-invalid' : v$.newProject.production.$error}"
                                class="form-check-input mb-2 focus-grey" role="switch">
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col d-flex justify-content-end content">
                        <button type="submit" class="btn col-12 col-md-2 btn-create">Create</button>
                    </div>
                </div>
            </form>
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref="toast1" id="toastSuccess" class="toast bg-success text-white" role="alert">
                <div class="toast-body">
                    The project was succesfully created.
                </div>
            </div>
        </div>
        </div>
    </main>
</template>

<style>

</style>
