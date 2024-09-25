import Image from 'next/image'

import styles from './styles.module.scss'
import { CheckBox } from '@/components/Checkbox'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.tasksContainer}>
          <p>Suas tarefas hoje</p>

          <div className={styles.task}>
            <CheckBox label="Lavar as mãos" id="1" />

            <Image src={'/assets/trash.png'} alt="" width={24} height={24} />
          </div>

          <div className={styles.task}>
            <CheckBox label="Lavar as mãos" id="2" />

            <Image src={'/assets/trash.png'} alt="" width={24} height={24} />
          </div>
        </div>

        <div className={styles.tasksContainer}>
          <p>Tarefas finalizadas</p>

          <div className={styles.task}>
            <CheckBox label="Lavar as mãos" id="3" />

            <Image src={'/assets/trash.png'} alt="" width={24} height={24} />
          </div>
        </div>
      </div>

      <Button className={styles.button}>Adicionar nova tarefa</Button>
    </section>
  )
}
