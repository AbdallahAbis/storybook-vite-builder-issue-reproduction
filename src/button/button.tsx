import { FC, useState } from "react";
import { styled } from '@stitches/react'
import type * as Stitches from '@stitches/react';
import { modifyVariantsForStory } from "../modifyForStory";

// Add a variant and see if it gets reflected on args table.
const BaseButton = styled('button', {
  fontWeight: '700',
  borderRadius: '3px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        backgroundColor: 'black',
        color: 'white'
      },
      secondary: {
        backgroundColor: "Navy",
        color: 'white'  
      },
      ghost: {
        color: 'black',
        border: '1px solid black'
      }
    },
    size: {
      sm: {
        padding: '0.5em 1em'
      },
      md: {
        padding: '0.8em 1.6em'
      },
      lg: {
        padding: '1em 2em'
      }
    },
    isBlock: {
      true: {
        display: 'block',
        width: '100%'
      }
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

type BaseButtonVariants = Stitches.VariantProps<typeof BaseButton>
export interface ButtonProps extends BaseButtonVariants {
  initial?: number;
  // uncomment bellow and see if it get's reflected on the args table without restarting dev server.
  // increment?: boolean; 
}
export const Button = ({
  initial = 10,
  variant = 'primary',
  size = 'md',
  isBlock = false
}: ButtonProps) => {
  const [count, setCount] = useState(initial)
  return (
    <BaseButton
      onClick={() => setCount(count + 1)}
      variant={variant}
      size={size}
      isBlock={isBlock}
    >
      {count}
    </BaseButton>
  )
}

/*
  Use this to get explicit types from strings,
  stitches generates complex unions that has `@initial` and `[x: string]`.
  the bellow clean that up.
*/
export const ButtonStory = modifyVariantsForStory<BaseButtonVariants, ButtonProps>(Button)