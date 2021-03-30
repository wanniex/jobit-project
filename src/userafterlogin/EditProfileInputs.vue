<template>
    <div class="justify-content-center">
        <b-container>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-row align-h="center">
                <b-avatar href="#foo" src="https://placekitten.com/300/300" class="mr-5" size="8em"></b-avatar>
                </b-row>
                <b-form-group
                    id = "name"
                    label = "Display Name:"
                    label-for = "name"
                >
                    <b-form-input
                    id = "name_input"
                    v-model = "new_name"
                    placeholder ="Enter new Username"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="email" label="Your Email:" label-for="email">
                    <b-form-input
                    id="email_input"
                    v-model= "new_email"
                    placeholder= "Enter email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="old_pw" label="Old Password:" label-for="old_pw">
                    <b-form-input
                    id="old_pw"
                    v-model= "old_pw"
                    type="password"
                    placeholder= "Enter Old Password"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="new_pw" label="New Password:" label-for="new_pw">
                    <b-form-input
                    id="new_pw"
                    v-model= "new_pw"
                    type="password"
                    placeholder= "Enter New Password"
                    ></b-form-input>
                </b-form-group>
                <br>
                <b-button id="button" type="submit" class="btn btn-primary mx-auto d-block">Submit</b-button>
            </b-form>

        </b-container>
    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }

}
</script>

<style scoped>
#button {
  background-color: #87ebd3;
  color: #ffff;
  border: none;
  transition-duration: 0.4s;
  width: 200px;
}

#button:hover {
  background-color: rgb(212, 212, 212);
  color: black;
}
</style>