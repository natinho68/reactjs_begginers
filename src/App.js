import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Basics/Greet';
import Welcome from './components/Basics/Welcome';
import Hello from './components/Basics/Hello';
import Message from './components/Basics/Message';
import Counter from './components/Basics/Counter';
import FunctionClick from './components/EventHandling/FunctionClick';
import Click from './components/EventHandling/Click';
import EventBind from './components/BindingEventHandlers/EventBind';
import ParentComponent from './components/MethodsAsProps/ParentComponent';
import UserGreeting from './components/ConditionalRendering/UserGreeting';
import NameList from './components/ListRendering/NameList';
import Stylesheet from './components/StylingCssBasics/Stylesheet';
import Inline from './components/StylingCssBasics/Inline';
import './components/StylingCssBasics/appStyles.css'
import styles from './components/StylingCssBasics/appStyles.module.css'
import Form from './components/Form/Form';
import LifecycleA from './components/LifecycleComponent/LifecycleA';
import FragmentDemo from './components/Fragments/FragmentDemo';
import Table from './components/Fragments/Table';
import PureComp from './components/PureComponent/PureComp';
import ParentComp from './components/PureComponent/ParentComp';
import RefsDemo from './components/Refs/Basics/RefsDemo';
import FocusInput from './components/Refs/RefsWithClassComponents/FocusInput';
import FrParentInput from './components/Refs/FowardingRefs/FRParentInput';
import PortalDemo from './components/Portals/PortalDemo';
import Hero from './components/ErrorBoundaries/Hero';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import CounterTwo from './components/RenderProps/CounterTwo';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';
import PostList from './components/HttpBasics/PostList';


function App() {
    return (
        <div className="App">
            <PostList />

            {/*<UserProvider value={'Nathan'}>
                <ComponentC />
            </UserProvider>*/}
            {/*<CounterTwo>
                {
                    (count, incrementCount) =>
                    <ClickCounterTwo count={ count } incrementCount={ incrementCount } />
                }
            </CounterTwo>

            <CounterTwo>
                {
                    (count, incrementCount) =>
                    <HoverCounterTwo count={ count } incrementCount={ incrementCount } />
                }
            </CounterTwo>*/ }
            {/*<User render={(isLoggedIn) => isLoggedIn ? 'Nathan' : 'Guest'} />
            <ClickCounterTwo />
            <HoverCounterTwo />*/ }
            {/*<HoverCounter name={'Michel'}/>
            <ClickCounter name={'Nathan'} />*/ }
            {/*<ErrorBoundary>
                <Hero heroName={'Batman'}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName={'Superman'}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName={'Joker'}/>
            </ErrorBoundary>*/ }
            {/*<PortalDemo />*/ }
            {/*<FrParentInput/>*/ }
            {/*<FocusInput />*/ }
            {/*<RefsDemo />*/ }
            {/*<ParentComp />*/ }
            {/*<PureComp />*/ }
            {/*<Table/>*/ }
            {/*<FragmentDemo />*/ }
            {/*<LifecycleA />*/ }
            {/*<Form />*/ }
            {/*<h1 className={'error'}>Error</h1>
            <h1 className={styles.success}>Success</h1>*/ }
            {/*<Inline />*/ }
            {/*<Stylesheet primary={false}/>*/ }
            {/*<NameList/>*/ }
            {/*<UserGreeting />*/ }
            {/*<ParentComponent />*/ }
            {/*<EventBind />*/ }
            {/*<FunctionClick />*/ }
            {/*<Click />*/ }
            {/*<Counter addvalue={1} />*/ }
            {/*<Message />*/ }
            {/*<Greet name="Peter" heroName="Spider man">
                <p>This is a children props</p>
            </Greet>*/ }
            {/*<Greet name="Tony" heroName="Iron man"/>*/ }
            {/*<button>Action</button>*/ }
            {/*<Greet name="Bruce" heroName="Hulk"/>*/ }
            {/*<Welcome name="Peter" heroName="Spider man">
                <p>This is a children props</p>
            </Welcome>*/ }
            {/*<Welcome name="Tony" heroName="Iron man"/>*/ }
            {/*<Welcome name="Bruce" heroName="Hulk"/>*/ }
            {/*<Hello/>*/ }
        </div>
    );
}

export default App;
