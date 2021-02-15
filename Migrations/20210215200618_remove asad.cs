using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class removeasad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_TestCommentId",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "TestCommentId",
                table: "Tests");

            migrationBuilder.AddColumn<int>(
                name: "CommentId",
                table: "Tests",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_CommentId",
                table: "Tests",
                column: "CommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Comments_CommentId",
                table: "Tests",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Comments_CommentId",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_CommentId",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "CommentId",
                table: "Tests");

            migrationBuilder.AddColumn<int>(
                name: "TestCommentId",
                table: "Tests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_TestCommentId",
                table: "Tests",
                column: "TestCommentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Comments_TestCommentId",
                table: "Tests",
                column: "TestCommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
