<script setup lang="ts">
import { buttonVariants } from '../ui/button'
</script>

<template>
  <div
    class="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]"
  >
    <Card
      class="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader class="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage
            alt=""
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>

        <div class="flex flex-col">
          <CardTitle class="text-lg">
            Client 01
          </CardTitle>
          <CardDescription>@client01</CardDescription>
        </div>
      </CardHeader>

      <CardContent>We found the services is good for us.</CardContent>
    </Card>

    <Card
      class="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader class="mt-8 flex justify-center items-center pb-2">
        <img
          src="https://i.pravatar.cc/150?img=58"
          alt="user avatar"
          class="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
        >
        <CardTitle class="text-center">
          Client 02
        </CardTitle>
        <CardDescription class="font-normal text-primary">
          Frontend Developer
        </CardDescription>
      </CardHeader>

      <CardContent class="text-center pb-2">
        <p>
          I really enjoy transforming ideas into functional software that
          exceeds expectations
        </p>
      </CardContent>

      <CardFooter>
        <div>
          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa"
            target="_blank"
            :class="[
              `${buttonVariants({
                variant: 'ghost',
                size: 'sm'
              })}`
            ]"
          >
            <span class="sr-only">Github icon</span>
            <Icon
              name="fa6-brands:github"
              size="1.2rem"
            />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://twitter.com/leo_mirand4"
            target="_blank"
            :class="[
              `${buttonVariants({
                variant: 'ghost',
                size: 'sm'
              })}`
            ]"
          >
            <span class="sr-only">X icon</span>
            <Icon
              name="fa6-brands:x-twitter"
              size="1.2rem"
            />
          </a>

          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            target="_blank"
            :class="[
              `${buttonVariants({
                variant: 'ghost',
                size: 'sm'
              })}`
            ]"
          >
            <span class="sr-only">Linkedin icon</span>
            <Icon
              name="fa6-brands:linkedin"
              size="1.2rem"
            />
          </a>
        </div>
      </CardFooter>
    </Card>

    <Card
      class="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader>
        <CardTitle class="flex item-center justify-between">
          Free
          <Badge
            variant="secondary"
            class="text-sm text-primary"
          >
            Starter Package
          </Badge>
        </CardTitle>
        <div>
          <span class="text-3xl font-bold">IDR0</span>
          <span class="text-muted-foreground"> /month</span>
        </div>

        <CardDescription>
          Try some starter and standard package and features to enable your business
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button class="w-full">
          Start Free Now
        </Button>
      </CardContent>

      <hr class="w-4/5 m-auto mb-4">

      <CardFooter class="flex">
        <div class="space-y-2">
          <span
            v-for="(item, index) in [
              '4 organization members',
              'Up to 1000 records data',
              'Up to 2 services/features'
            ]"
            :key="index"
            class="flex items-center"
          >
            <Icon
              name="lucide:check"
              class="text-green-500"
            />
            <h3 class="ml-2">{{ item }}</h3>
          </span>
        </div>
      </CardFooter>
    </Card>

    <Card
      class="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader
        class="space-y-1 flex md:flex-row justify-start items-start gap-4"
      >
        <div class="mt-1 bg-primary/20 p-1 rounded-2xl">
          <Icon
            name="lucide:lightbulb"
            size="3em"
            class="text-primary"
          />
        </div>
        <div>
          <CardTitle>Theme mode</CardTitle>
          <CardDescription class="text-md mt-2">
            Change the theme based on the system or user selection based on preference.
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  </div>
</template>
