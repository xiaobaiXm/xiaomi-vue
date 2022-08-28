import { useRouter } from 'vue-router'

const router = useRouter()

export const productDetail = (productId:number): void => {
  console.log(productId)
}
