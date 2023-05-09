import axios, { type AxiosInstance, type AxiosResponse } from "axios";

class ApiClient {
    private readonly instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:8080/",
            timeout: 100000000,
        });
    }

    public async get(url: string): Promise<AxiosResponse> {
        return await this.instance.get(url);
    }

    public async getFile(url: string, filename: string): Promise<void> {
        const response = await this.instance.get(url, { responseType: "blob" });
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    public async put(url: string, data: any = {}): Promise<AxiosResponse> {
        return await this.instance.put(url, data);
    }

    public async post(url: string, data: any = {}): Promise<AxiosResponse> {
        return await this.instance.post(url, data);
    }

    public async delete(url: string): Promise<AxiosResponse> {
        return await this.instance.delete(url);
    }
}

const client = new ApiClient();

export { client };
