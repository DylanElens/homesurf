<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const input = ref<string>()

const increment = () => {
    count.value += 1
}
const decrement = () => {
    count.value -= 1
}

const upload = async (event: any) => {
    console.log(event.files.length)
    //we are going to looop through alle the files and 
    // for (let i = 0; i < event.files.length; i++) {
    //     let data = new FormData();
    //     data.append('file', event.files[i])
    //     await fetch('http://localhost:8080/upload', {
    //         method: 'POST',
    //         body: data
    //     })
    // }

    //rewrite the the above code cleaner
    const data = new FormData()
    for (let i = 0; i < event.files.length; i++) {
        data.append('file', event.files[i])
    }

    await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: data
    })

}

onMounted(async () => {
    // ditto.value = await getPokemonData()
})
</script>

<template>
    <h1>{{ msg }}</h1>

    <pButton label="increment" :onClick="increment" />
    <pButton label="decrement" :onClick="decrement" />
    <h1>{{ count }}</h1>
    <pTextarea v-model="input" />
    <pFileUpload name="demo[]" @uploader="upload($event)" :multiple="true" customUpload accept="image/*"
        :maxFileSize="1000000">
        <template #empty>
            <p>Drag and drop files to here to upload.</p>
        </template>
    </pFileUpload>
</template>

<style scoped></style>
