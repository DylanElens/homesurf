<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const products = ref([{
    code: 1,
    name: "kippensoep",
    category: "soep",
    quantity: "quant"
}])

const upload = async (event: any) => {
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
    <pFileUpload name="demo[]" @uploader="upload($event)" :multiple="true" customUpload accept="image/*"
        :maxFileSize="1000000">
        <template #empty>
            <p>Drag and drop files to here to upload.</p>
        </template>
    </pFileUpload>
    <pDataTable class="my-3" :value="products" tableStyle="min-width: 50rem">
        <pColumn field="code" header="Code"></pColumn>
        <pColumn field="name" header="Name"></pColumn>
        <pColumn field="category" header="Category"></pColumn>
        <pColumn field="quantity" header="Quantity"></pColumn>
    </pDataTable>
</template>

<style scoped></style>
