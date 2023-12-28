import styles from "./page.module.scss";
import Table from "@/components/Table/Table";
import { getPosts } from "@/services/getPosts";
import Search from "@/components/Search/Search";

export default async function Home() {
  const data = await getPosts();
  console.log( data );
  // const data =[{
  //   "userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "qui est esse",
  //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  //   },];

  return (
    <section className={ styles.home }>

      <h1 className={ styles[ "home__title" ] }>Практическое задание №2</h1>

      <Search />

      <Table data={ data } />

    </section>
  );
}
