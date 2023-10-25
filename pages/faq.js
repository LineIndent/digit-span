import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { Box, Button, Code, Divider, Heading, HStack, Image, Link, ListItem, OrderedList, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Spacer, Text, UnorderedList, useColorMode, VStack } from "@chakra-ui/react"
import { InfoIcon, InfoOutlineIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import NextLink from "next/link"
import { Prism } from "react-syntax-highlighter"
import { light } from "/styles/code/prism"
import Script from "next/script"
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


  return (
  <Fragment><Fragment>
  <VStack spacing={`0`} sx={{"width": "100%", "height": "100vh"}}>
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
  <VStack alignItems={`start`} sx={{"width": "100%", "height": "inherit", "padding": ["3rem 1.5rem", "3rem 1.5rem", "3rem 1.5rem", "3rem 10rem", "3rem 20rem"], "transition": "all 550ms ease", "overflow": "auto"}}>
  <Heading size={`lg`}>
  {`FAQs: Digit Span Test`}
</Heading>
  <Divider sx={{"height": "2em", "borderColor": "transparent"}}/>
  <ReactMarkdown components={{"h1": ({node, ...props}) => <Heading {...props} as={`h1`}size={`2xl`} />, "h2": ({node, ...props}) => <Heading {...props} as={`h2`}size={`xl`} />, "h3": ({node, ...props}) => <Heading {...props} as={`h3`}size={`lg`} />, "h4": ({node, ...props}) => <Heading {...props} as={`h4`}size={`md`} />, "h5": ({node, ...props}) => <Heading {...props} as={`h5`}size={`sm`} />, "h6": ({node, ...props}) => <Heading {...props} as={`h6`}size={`xs`} />, "p": ({node, ...props}) => <Text {...props}  />, "ul": ({node, ...props}) => <UnorderedList {...props}  />, "ol": ({node, ...props}) => <OrderedList {...props}  />, "li": ({node, ...props}) => <ListItem {...props}  />, "a": ({node, ...props}) => <Link {...props}  />, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             theme={light}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}} customStyles={{"h1": {"as": "h1", "size": "2xl"}, "h2": {"as": "h2", "size": "xl"}, "h3": {"as": "h3", "size": "lg"}, "h4": {"as": "h4", "size": "md"}, "h5": {"as": "h5", "size": "sm"}, "h6": {"as": "h6", "size": "xs"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`##### 1. What is the Digit Span Test?

The Digit Span Test is a psychological assessment tool used to measure a person's short-term memory capacity. It involves recalling and repeating sequences of digits in the same order they were presented.

</br>

##### 2. How is the Test Administered?

In the test, a series of digits are read aloud to the participant at a steady pace. The participant's task is to listen, remember, and then accurately repeat the digits in the correct order. The test typically starts with a short sequence and gradually increases in difficulty.

</br>

##### 3. What is the Purpose of the Digit Span Test?

The primary purpose of the Digit Span Test is to assess an individual's working memory capacity. It is often used in neuropsychological assessments, educational settings, and research studies to understand memory capabilities.

</br>

##### 4. What Does a Digit Span Score Indicate?

The score on the Digit Span Test can provide insights into a person's cognitive functioning, specifically their short-term memory capacity. A higher score generally indicates better working memory.

</br>

##### 5. Are There Different Versions of the Test?

Yes, there are different variations of the Digit Span Test. The most common include the Forward Digit Span (repeating the digits in the same order) and the Backward Digit Span (repeating the digits in reverse order). These variations assess slightly different cognitive processes.

</br>

##### 6. What Factors Can Affect Digit Span Performance?

Several factors can influence Digit Span Test performance, including age, cognitive abilities, attention, and the presence of certain medical or psychological conditions.

</br>

##### 7. Can the Test Be Used to Diagnose Conditions?

While the Digit Span Test is a valuable tool for assessing memory, it is not used as a standalone diagnostic tool. Instead, it is often part of a battery of tests to assess cognitive function or to track changes over time.

</br>

##### 8. Is the Digit Span Test Suitable for Everyone?

The test can be administered to individuals of various ages, but it may not be suitable for very young children or individuals with severe cognitive impairments.

</br>

##### 9. Can I Practice for the Digit Span Test?

Yes, it is possible to improve your Digit Span Test performance with practice. Repeating sequences of digits and using memory-enhancing techniques may help enhance your working memory.

</br>

##### 10. Where Can I Take the Digit Span Test?

The test is often administered by trained professionals in clinical or educational settings. It may also be available online as part of cognitive assessment tools or brain-training apps.

`}
</ReactMarkdown>
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
  {`Frequently Asked Questions`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
