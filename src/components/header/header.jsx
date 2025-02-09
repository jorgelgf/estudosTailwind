import { Toggletheme } from '../toggleTheme';
export const Header = ({user}) => {
  return <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
    <span className='text-gray-100'>{`Olá, ${user?.name || "Usuário"}`}</span>
    <h1>Alura NewsLetter</h1>
    <Toggletheme />
  </div>
}