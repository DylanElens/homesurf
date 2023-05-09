<script setup lang="ts">
import { ref, onMounted } from "vue";
import { client } from "../api-client";
import { UploadFile } from "../components/listfiles.types";

const files = ref<UploadFile>();

const upload = async (event: any) => {
    const data = new FormData();
    for (let i = 0; i < event.files.length; i++) {
        data.append("file", event.files[i]);
    }

    await client.post("http://localhost:8080/upload", data);
    await loadData();
};

const loadData = async () => {
    files.value = (await client.get("files")).data;
};


const downloadFile = async (link: string, filename: string) => {
    return await client.getFile(`download/${link.split("/")[2]}`, filename);
};

onMounted(async () => {
    await loadData();
    console.log(files.value);
});


</script>

<template>
    <pFileUpload name="demo[]" @uploader="upload($event)" :multiple="true" customUpload>
        <template #empty>
            <p>Drag and drop files to here to upload.</p>
        </template>
    </pFileUpload>
    <pDataTable class="my-3" :value="files" tableStyle="min-width: 50rem">
        <pColumn field="id" header="id"></pColumn>
        <pColumn field="file_name" header="name"></pColumn>
        <pColumn field="file_path" header="path"></pColumn>
        <pColumn field="created_at" data_type="date" header="created at">
            <template #body="{ data }">
                {{ new Date(data.created_at).toLocaleString() }}
            </template>
        </pColumn>

        <pColumn header="download">
            <template #body="{ data }">
                <pButton type="button" label="dowload" @click="downloadFile(data.file_path, data.file_name)"></pButton>
            </template>
        </pColumn>
    </pDataTable>
</template>

<style scoped></style>
