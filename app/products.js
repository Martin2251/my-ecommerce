import { initMongoose } from "./lib/mongoose";
import Product from "./models/Product";

export default async function handle(req,res){

await initMongoose()
Product
}