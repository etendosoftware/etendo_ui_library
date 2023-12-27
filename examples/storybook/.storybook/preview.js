/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ height: 'auto', justifyContent:"center"}}>
        <style>
          {`
     
          ::-webkit-scrollbar {
            width: 7px; 
            height: 4px;
        }
        
        ::-webkit-scrollbar-track {
            background: transparent; 
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2); 
            border-radius: 10px; 
            transition: background-color 0.3s; 
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.4); 
        }
        `}
        </style>
        <Story />
      </div>
    ),
  ],
};

export default preview;
