<template>
  <table class="rbt-table table table-borderless">
    <thead>
      <tr>
        <th>Quiz</th>
        <th>Qus</th>
        <th>TM</th>
        <th>CA</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="LessonQuizData"
        v-for="(data, index) in LessonQuizData.lessonQuiz"
        :key="index"
      >
        <th>
          <p class="b3 mb--5">{{ data.date }}</p>
        </th>
        <td>
          <p class="b3">{{ data.qus }}</p>
        </td>
        <td>
          <p class="b3">{{ data.tm }}</p>
        </td>
        <td>
          <p class="b3">{{ data.ca }}</p>
        </td>
        <td>
          <span
            :class="`rbt-badge-5 ${
              data.isPass
                ? 'bg-color-success-opacity color-success'
                : 'bg-color-danger-opacity color-danger'
            }`"
          >
            {{ data.isPass ? "Pass" : "Fail" }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import LessonQuizData from "../../data/lesson.json";
</script>

<style lang="scss" scoped></style>
