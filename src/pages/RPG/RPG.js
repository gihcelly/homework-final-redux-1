import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './RPG.module.scss';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RPG = () => {
  const { pathname } = useLocation();
  const { allItens } = useSelector(state => {
    const regexp = new RegExp(state.search, 'i');
    return {
      category: state.categories.find(category  => category.id === pathname),
      allItens: state.allItens.filter(item => item.category === pathname && item.titleCard.match(regexp))
    }
  });
  
  return (
    <>
      <Header titleCategory='Role Playing Game' description='Role-playing game, também conhecido como RPG, é um tipo de jogo em que os jogadores assumem papéis de personagens e criam narrativas colaborativamente.' />
      <section>
        <div className={styles.container}>
          {allItens?.map((item) => (
            <CardDetail key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default RPG