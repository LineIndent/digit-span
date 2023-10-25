import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { Box, Button, Code, Divider, Heading, HStack, Image, Input, Link, ListItem, OrderedList, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Spacer, Text, UnorderedList, useColorMode, VStack } from "@chakra-ui/react"
import { CloseIcon, InfoIcon, InfoOutlineIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import Script from "next/script"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import NextLink from "next/link"
import { Prism } from "react-syntax-highlighter"
import { light } from "/styles/code/prism"
import NextHead from "next/head"


export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [Event, notConnected] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event([E('state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])

  const ref_RxAnnouncement = useRef(null); refs['ref_RxAnnouncement'] = ref_RxAnnouncement;
  const ref_result = useRef(null); refs['ref_result'] = ref_result;
  const ref_userSequence = useRef(null); refs['ref_userSequence'] = ref_userSequence;
  const ref_digit = useRef(null); refs['ref_digit'] = ref_digit;
  const ref_close = useRef(null); refs['ref_close'] = ref_close;
  const ref_level = useRef(null); refs['ref_level'] = ref_level;
  const ref_start = useRef(null); refs['ref_start'] = ref_start;
  const ref_check = useRef(null); refs['ref_check'] = ref_check;
  const ref_lives = useRef(null); refs['ref_lives'] = ref_lives;

  return (
  <Fragment><Fragment>
  <VStack spacing={`0`} sx={{"width": "100%", "height": "100vh"}}>
  <HStack id={`RxAnnouncement`} ref={ref_RxAnnouncement} sx={{"width": "100%", "height": "45px", "bg": "#18181d", "padding": ["0rem 1rem", "0rem 1rem", "0rem 0.5rem", "0rem 4rem", "0rem 10rem"], "transition": "all 550ms ease"}}>
  <Box dangerouslySetInnerHTML={{"__html": " <div style='color: #b8b8ba;'>Built with <span><strong style='color: #fff;'>Reflex</strong></span>. For more info visit<span style='vertical-align: middle;'> <a href='https://github.com/reflex-dev/reflex'><img src='/github.png' style='width: 21px; height: 21px; display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);'/></a></span> <a href='https://github.com/reflex-dev/reflex'> <span style='color: #fff;'><strong></strong></span></a></div>"}}/>
  <Spacer/>
  <Button colorScheme={`None`} id={`close`} onClick={...args => {hide(args)}} ref={ref_close}>
  <CloseIcon sx={{"color": "white", "transform": "Scale(0.8)"}}/>
  <Script strategy={`afterInteractive`}>
  {`
localStorage.setItem("headerHidden", "true");
var close = document.getElementById("close");

function hide() {
    var RxAnnouncement = document.getElementById("RxAnnouncement");
    
    if (localStorage.getItem("headerHidden") === "true") {
        RxAnnouncement.style.display = "none";
        localStorage.setItem("headerHidden", "false");
    }

}

close.addEventListener("click", hide);
                    `}
</Script>
</Button>
</HStack>
  <HStack sx={{"width": "100%", "height": "7vh", "boxShadow": "0px 4px 8px 0px rgba(0, 0, 0, 0.25)", "justifyContent": "center", "padding": ["0 1rem", "0 1rem", "0 1rem", "0 4rem", "0 10rem"], "transition": "all 400ms ease", "_dark": {"bg": "#141518"}, "_light": {"bg": "#ffffff"}}}>
  <Image htmlHeight={`24px`} htmlWidth={`24px`} src={`/brain.png`} sx={{"@keyframes brain": {"0%": {"transform": "scale(1.1)"}, "100%": {"transform": "scale(0.8)"}}, "animation": "brain 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate-reverse both", "_dark": {"filter": "brightness(0) invert(1)"}}}/>
  <Heading size={`md`} sx={{"fontWeight": "400"}}>
  {`Digit Span - Memory Test`}
</Heading>
  <Spacer/>
  <Popover>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <PopoverTrigger>
  <InfoOutlineIcon sx={{"cursor": "pointer"}}/>
</PopoverTrigger>
</Fragment>
) : (
  <Fragment>
  <PopoverTrigger>
  <InfoIcon sx={{"cursor": "pointer"}}/>
</PopoverTrigger>
</Fragment>
)}
</Fragment>
  <PopoverContent>
  <PopoverBody sx={{"boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.35)", "border": "none"}}>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`**Instructions**:

1. To begin, press the \`start\` button to generate a sequence of digits.

2. Once the sequence is generated, enter the numbers inside the input field.

3. Press the \`check\` button to see if your input matches the sequence. 

</br>
If your input is incorrect, you lose a life and can re-try. There is a maximum of 3 lives.

If your input matches the sequence, you advance to the next level. 

</br>

With each level the number of digits generated is \`increased by 1\`.

</br>

**Good luck, have fun!**

`}
</ReactMarkdown>
</PopoverBody>
  <PopoverCloseButton/>
</PopoverContent>
</Popover>
  <Button colorScheme={`None`} onClick={toggleColorMode} sx={{"_dark": {"color": "white"}, "_light": {"color": "black"}}}>
  <Fragment>
  {isTrue((colorMode === "light")) ? (
  <Fragment>
  <SunIcon/>
</Fragment>
) : (
  <Fragment>
  <MoonIcon/>
</Fragment>
)}
</Fragment>
</Button>
</HStack>
  <VStack sx={{"width": "100%", "height": "inherit"}}>
  <Script src={`/numbers.js`} strategy={`afterInteractive`}/>
  <Divider sx={{"height": "5em", "borderColor": "transparent"}}/>
  <HStack sx={{"height": "180px", "width": "180px", "justifyContent": "center", "alignItems": "center", "borderRadius": "10px", "boxShadow": "0px 15px 30px 0px rgba(0, 0, 0, 0.5)", "_dark": {"bg": "#17181d"}}}>
  <Heading id={`digit`} ref={ref_digit} sx={{"fontSize": "105px", "textAlign": "center"}}/>
</HStack>
  <Divider sx={{"height": "3.5em", "borderColor": "transparent"}}/>
  <HStack>
  <Button colorScheme={`None`} id={`start`} onClick={...args => {startNewLevel(args)}} ref={ref_start} sx={{"padding": "0"}}>
  <Image htmlHeight={`32px`} htmlWidth={`32px`} src={`/play.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Button>
  <Button colorScheme={`None`} id={`check`} onClick={...args => {checkUserSequence(args)}} ref={ref_check} sx={{"padding": "0"}}>
  <Image htmlHeight={`32px`} htmlWidth={`32px`} src={`/check.png`} sx={{"_dark": {"filter": "brightness(0) invert(1)"}}}/>
</Button>
</HStack>
  <Divider sx={{"height": "0.5em", "borderColor": "transparent"}}/>
  <HStack alignItems={`center`} justifyContent={`center`} sx={{"width": "100%", "height": "70px", "padding": ["0 1rem", "0 1rem", "0 3rem", "0 15rem", "0 30rem"]}}>
  <Input id={`userSequence`} ref={ref_userSequence} sx={{"height": "70px", "fontSize": "50px", "textAlign": "center", "transition": "all 550ms ease", "letterSpacing": "0.25rem"}} type={`text`}/>
</HStack>
  <Divider sx={{"height": "0.5em", "borderColor": "transparent"}}/>
  <HStack spacing={`4rem`}>
  <Text sx={{"fontSize": "19px"}}>
  {`Lives: `}
  <Text as={`span`} id={`lives`} ref={ref_lives}>
  {`3`}
</Text>
</Text>
  <Text sx={{"fontSize": "19px"}}>
  {`Level: `}
  <Text as={`span`} id={`level`} ref={ref_level}>
  {`1`}
</Text>
</Text>
</HStack>
  <Text id={`result`} ref={ref_result} sx={{"textAlign": "center", "padding": "1rem 1rem"}}/>
  <Spacer/>
</VStack>
  <HStack sx={{"width": "100%", "height": "50px", "padding": ["0 1rem", "0 1rem", "0 1rem", "0 4rem", "0 10rem"]}}>
  <Text sx={{"fontSize": ["13px", "14px", "14px", "14px", "14px"], "transition": "all 550ms ease"}}>
  {`Copyright © 2023 S. Ahmad P. Hakimi`}
</Text>
  <Spacer/>
  <Button colorScheme={`None`} onClick={...args => {goGame(args)}} sx={{"_dark": {"color": "white"}, "_light": {"color": "black"}, "padding": "0 0.35rem", "fontWeight": "None"}}>
  <Script src={`/links.js`} strategy={`afterInteractive`}/>
  {`Game`}
</Button>
  <Button colorScheme={`None`} onClick={...args => {goFAQ(args)}} sx={{"_dark": {"color": "white"}, "_light": {"color": "black"}, "padding": "0 0.35rem", "fontWeight": "None"}}>
  <Script src={`/links.js`} strategy={`afterInteractive`}/>
  {`FAQ`}
</Button>
  <Button colorScheme={`None`} onClick={...args => {goGitHub(args)}} sx={{"_dark": {"color": "white"}, "_light": {"color": "black"}, "padding": "0 0.35rem", "fontWeight": "None"}}>
  <Script src={`/links.js`} strategy={`afterInteractive`}/>
  {`GitHub`}
</Button>
</HStack>
</VStack>
  <NextHead>
  <title>
  {`Digit Span Game`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
