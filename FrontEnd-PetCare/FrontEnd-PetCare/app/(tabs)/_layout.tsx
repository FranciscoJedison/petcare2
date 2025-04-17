import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import LoginScreen from './Login';
import AlterarSenhaScreen from './AlterarSenha';
import RedefinirSenhaScreen from './RedefinirSenha';
import RegistroUserScreen from './RegistroUser';
import CadastroAtendimento from './CadastroAtendimento';
import GerenciamentoUser from '../GerenciamentoUser';
import GerenciamentoAgendamento from '../GerenciamentoAgendamento';
import GerenciamentoServico from '../GerenciamentoServico';
import Relatorio from '../Relatorio';

// Telas
import HomeScreen from './index';
import AboutScreen from './Index/AboutScreen';
import ServiceScreen from './Index/ServiceScreen';
import PortfolioScreen from './Index/PortfolioScreen';
import TestimonialScreen from './Index/TestimonialScreen';
import BlogScreen from './Index/BlogScreen';
import ContactScreen from './Index/ContactScreen';

const DrawerNavigator = createDrawerNavigator();
const TabNavigator = createBottomTabNavigator();
type IconName =
  | 'home'
  | 'information'
  | 'construct'
  | 'briefcase'
  | 'people'
  | 'logo-reddit'
  | 'call';

// Função para configurar as Tabs (ícones)
function Tabs() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Sobre nós':
              iconName = 'information';
              break;
            case 'Nossos serviços':
              iconName = 'construct';
              break;
            case 'Portfolio':
              iconName = 'briefcase';
              break;
            case 'Depoimentos':
              iconName = 'people';
              break;
            case 'InfoBot':
              iconName = 'logo-reddit';
              break;
            case 'Contate -me':
              iconName = 'call';
              break;
            default:
              iconName = 'home';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#047fce', // Ícone ativo (selecionado)
        tabBarInactiveTintColor: '#001F3F', // Ícone inativo
      })}
    >
      <TabNavigator.Screen name="Home" component={HomeScreen} />
      <TabNavigator.Screen name="Sobre nós" component={AboutScreen} />
      <TabNavigator.Screen name="Nossos serviços" component={ServiceScreen} />
      <TabNavigator.Screen name="Portfolio" component={PortfolioScreen} />
      <TabNavigator.Screen name="Depoimentos" component={TestimonialScreen} />
      <TabNavigator.Screen name="InfoBot" component={BlogScreen} />
      <TabNavigator.Screen name="Contate -me" component={ContactScreen} />
    </TabNavigator.Navigator>
  );
}

export default function DrawerLayout() {
  return (
    <DrawerNavigator.Navigator
      screenOptions={({ navigation }) => ({
        drawerActiveTintColor: '#00FFFF', // Cor do ícone ativo
        drawerInactiveTintColor: '#001F3F', // Cor do ícone inativo
        headerLeft: () => (
          <Pressable
            onPress={() => {
              navigation.toggleDrawer(); // Abre ou fecha o drawer
            }}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={28} color={'#00FFFF'} />
          </Pressable>
        ),
      })}
    >
      {/* Tela de Home que conterá o TabNavigator */}
      <DrawerNavigator.Screen
        name="Home"
        options={{
          title: 'Inicio',
          drawerIcon: ({ color }: { color: string }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
          headerStyle: {
            backgroundColor: 'rgb(0, 0, 0)', // Altere a cor do fundo do cabeçalho
          },
          headerTintColor: '#fff', // Altere a cor do texto do título
        }}
        component={Tabs} // Aqui você usa o TabNavigator diretamente
      />

      {/* Adicionando telas adicionais sem controle de usuário */}
      <DrawerNavigator.Screen
        name="Login"
        options={{
          title: 'Login',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="log-in-outline" size={28} color={color} />,
        }}
        component={LoginScreen}
      />

      <DrawerNavigator.Screen
        name="RegistroUser"
        options={{
          title: 'Cadastro de Usuário',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="person-add-outline" size={28} color={color} />,
        }}
        component={RegistroUserScreen}
      />

      <DrawerNavigator.Screen
        name="CadastroAtendimento"
        options={{
          title: 'Cadastro do Atendimento',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="person-add-outline" size={28} color={color} />,
        }}
        component={CadastroAtendimento}
      />

      <DrawerNavigator.Screen
        name="GerenciamentoUser"
        options={{
          title: 'Gerenciamento de Usuarios',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="people" size={28} color={color} />,
        }}
        component={GerenciamentoUser}
      />

      <DrawerNavigator.Screen
        name="GerenciamentoAgendamento"
        options={{
          title: 'Gerenciamento de Agendamento',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="calendar-outline" size={28} color={color} />,
        }}
        component={GerenciamentoAgendamento}
      />

      <DrawerNavigator.Screen
        name="GerenciamentoServico"
        options={{
          title: 'Gerenciamento de Serviço',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="construct-outline" size={28} color={color} />,
        }}
        component={GerenciamentoServico}
      />

      <DrawerNavigator.Screen
        name="Relatorio"
        options={{
          title: 'Relatorio',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="construct-outline" size={28} color={color} />,
        }}
        component={Relatorio}
      />

      <DrawerNavigator.Screen
        name="AlterarSenha"
        options={{
          title: 'Alterar Senha',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="key-outline" size={28} color={color} />,
        }}
        component={AlterarSenhaScreen}
      />

      <DrawerNavigator.Screen
        name="RedefinirSenha"
        options={{
          title: 'Redefinir Senha',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="lock-open-outline" size={28} color={color} />,
        }}
        component={RedefinirSenhaScreen}
      />

      <DrawerNavigator.Screen
        name="Sair"
        options={{
          title: 'Sair',
          drawerIcon: ({ color }: { color: string }) => <Ionicons name="log-out-outline" size={28} color={color} />,
        }}
        component={() => null} // Componente vazio para a opção de sair
      />
    </DrawerNavigator.Navigator>
  );
}
