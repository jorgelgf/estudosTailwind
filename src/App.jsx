import { ArticleList } from './components/articleList'
import { useState } from 'react';
import { Header } from './components/header/header';
import { Form } from './components/form';

export default function App() {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return <div className='h-screen'>
    <Header user={user} />
    {hasUser && <ArticleList />}
    {hasUser || <Form onSubmit={setUser} />}
  </div>
}