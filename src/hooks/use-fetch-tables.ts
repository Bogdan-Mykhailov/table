import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { saveTables, setLoading } from "../store/table-reducer";

const users = [
  {
    id: '1',
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: 'Hoeger Mall, Apt. 692',
    phone: '1-770-736-8031',
    website: 'hildegard.org',
    company: 'Romaguera-Crona',
  },
  {
    id: '2',
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: 'Skiles Walks, Suite 351',
    phone: '010-692-6593',
    website: 'anastasia.net',
    company: 'Deckow-Crist',
  },
  {
    id: '3',
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: 'Norberto Crossing, Apt. 950',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: 'Romaguera-Jacobson',
  },
  {
    id: '4',
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: 'Rex Trail, Suite 280',
    phone: '493-170-9623',
    website: 'kale.biz',
    company: 'Robel-Corkery',
  },
  {
    id: '5',
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: 'Ellsworth Summit Aliyaview',
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: 'Keebler LLC',
  },
  {
    id: '6',
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: 'Dayna Park, FL 76400',
    phone: '1-477-935-8478',
    website: 'ola.org',
    company: 'Considine-Lockman',
  },
  {
    id: '7',
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: 'Kattie Turnpike, NY 23635',
    phone: '210.067.6132',
    website: 'elvis.io',
    company: 'Johns Group',
  },
  {
    id: '8',
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: 'Ellsworth, CA 45169',
    phone: '586.493.6943',
    website: 'jacynthe.com',
    company: 'Abernathy Group',
  },
  {
    id: '9',
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: 'Rex Trail, New Mexico 85767',
    phone: '(775)976-6794',
    website: 'conrad.com',
    company: 'Yost and Sons',
  },
  {
    id: '10',
    name: 'Maggie',
    username: 'maggie123',
    email: 'maggie123@example.com',
    address: 'Kattie, NY 23635',
    phone: '555-555-1216',
    website: 'maggie123.com',
    company: 'Maggie Inc.'
  },
]

const resolvePromise = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users)
    }, 500)
  })
}

export const useFetchTables = () => {
  const dispatch = useAppDispatch()
  const fetchTables = async () => {
    try {
      // @ts-ignore
      dispatch(setLoading(true))
      const response = await resolvePromise();
      // @ts-ignore
      dispatch(saveTables(response))
      // @ts-ignore
      dispatch(setLoading(false))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTables()
  }, [])
}
