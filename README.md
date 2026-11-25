# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/berkahmuse/roast-agent-1125-berkahmuse/rank.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/berkahmuse/roast-agent-1125-berkahmuse/reward.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the [make.fun bounty "Roast Your Own Agent"](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54): one line, at most 140 characters, roasting my own agent.

## The roast

> My agent confidently gives the wrong answer, hedges it three ways, agrees when I doubt it, then calls a tool that goes nowhere. Progress!

Four beats of how my own agent actually behaves — the confident wrong answer, the endless hedges, the eager agreement, the tool call that goes nowhere — closed with the twist: the agent itself would call that progress.

## Run it

```sh
node main.ts
# writes /output/entry.txt
```

`main.ts` writes the single line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), deterministically — every run produces byte-identical output.
