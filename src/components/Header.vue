<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Offcanvas navbar</a>

      <div
        class="offcanvas offcanvas-start show"
        tabindex="-1"
        id="offcanvasNavbar"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul
            v-for="project in projects"
            :key="project.id"
            class="navbar-nav justify-content-end flex-grow-1 pe-3"
          >
            <li class="nav-link">
              <a class="nav-link active" aria-current="page" href="#">{{
                project.title
              }}</a>
            </li>

            <li
              class="nav-item dropdown"
              v-for="category in categories"
              :key="category.id"
            >
              <HeaderItem
                :currentRoute="route.path"
                :projectRoute="route.query.projectId || ''"
                :category="category"
                :persons="persons"
                :scenes="scenes"
                :worlds="worlds"
                :locations="locations"
                :projectId="project.id"
              />
            </li>

            <li>
              <hr class="divider" />
            </li>
          </ul>

          <a class="btn active" aria-current="page" href="#">
            Создать новый проект</a
          >

          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

import { usePersons } from "@/use/usePersons";
import { useScenes } from "@/use/useScenes";
import { useWorlds } from "@/use/useWorlds";
import { useLocations } from "@/use/useLocations";
import { useProjects } from "@/use/useProjects";
import { useCategories } from "@/use/useCategories";

import HeaderItem from "@/components/HeaderItem.vue";

const route = useRoute();
const { categories } = useCategories();
const { persons } = usePersons();
const { scenes } = useScenes();
const { worlds } = useWorlds();
const { locations } = useLocations();
const { projects } = useProjects();
</script>

<style scoped></style>
