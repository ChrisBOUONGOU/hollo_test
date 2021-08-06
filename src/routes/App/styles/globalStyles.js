import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body}; 
        color: ${({ theme }) => theme.text};
        
    }
    .title{
      color: ${({ theme }) => theme.title};
    }
    .app{
        &__dark-mode-btn{
            color: ${({ theme }) => theme.icon};
        }
    }
    p{
        opacity: ${({ theme }) => theme.opacity};
    }
    .darkinput {
        background: rgba(255, 255, 255, 0.2);
        color: white;
    
        &::placeholder {
          color: white;
        }
    
        &:hover {
          border-color: rgba(255, 255, 255, 0.4);
        }
    
        &:focus {
          border-color: rgba(255, 255, 255, 0.6);
        }
      }
    
   
   
    
    
`;


export const lightTheme = {

    body: '#eff0eb',
    text: '#121212',
    title: '#363636',
    icon: '#121212',



};

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    title: '#BB86FC',
    icon: '#FFA500',
    opacity: '87%',

};