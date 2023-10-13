import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const config = {
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: '2023-08-18',
    useCdn: false,
    token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
};

const Client = createClient(config);

export default Client;

const builder = imageUrlBuilder(Client);
export const urlFor = (source) => builder.image(source);
